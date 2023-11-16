import { useEffect, useState } from "react"
import { StyledErroText, StyledFixedBtn, StyledInputDefault, StyledInputInline, StyledInputNumber, StyledInputsWBtn, StyledMinus, StyledPlus2, StyledScroolView, StyledTBtnInline, StyledTextCreate, StyledTextDefault, StyledTextWBtn, StyledTitleText, StyledViewForm } from "../../Components/Styles/Styles";
import { Button, TextInput, View } from "react-native";
import { DataAtual, Salvar } from "../../Components/SalvarDieta/SalvarDieta";
import Modal from "../../Components/Modals/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addDieta } from "../../Components/ReduxConfig/Reducers";
import { useRoute } from "@react-navigation/native";

export default () => {
    const dispatch = useDispatch();
    const dietaState = useSelector(state => state.dieta);
    const [dadosDieta, setDadosDieta] = useState('');
    const route = useRoute();
    const {item} = route.params;
    console.log("testeeeee=====")
    console.log(item)
    console.log(item.Dieta[2].almoco);//.length
    console.log(dietaState[0].Dieta[1]);
    console.log(item.Dieta[1].cafe.filter((e) => e.id == 1));
    // console.log(item.Dieta[4].janta.map((e) => ({id: e.id})))


    const [cafeDados, setCafed] = useState(item.Dieta[1].cafe); //dados de cada input de determinada refeição    =={"id": 0, "nomeComida": "", "calorias": 0}
    const [almocoDados, setAlmocod] = useState(item.Dieta[2].almoco);
    const [lancheDados, setLanched] = useState(item.Dieta[3].lanche);
    const [jantaDados, setJantad] = useState(item.Dieta[4].janta);

    const [cafeInput, setCafeInput] = useState(item.Dieta[1].cafe.map((e) => ({id: e.id}))); // quantidade de inputs para adicionar alimentos em determinada refeição
    const [almocoInput, setAlmocoInput] = useState(item.Dieta[2].almoco.map((e) => ({id: e.id})));
    const [lancheInput, setLancheInput] = useState(item.Dieta[3].lanche.map((e) => ({id: e.id})));
    const [jantaInput, setJantaInput] = useState(item.Dieta[4].janta.map((e) => ({id: e.id})));
    const [ids, setIds] = useState([0, 0, 0, 0]);
    
    const adicionarInput = (inputArray, setInputArray, dadosArray, setDadosArray, idIndex) => {
        setInputArray([...inputArray, { id: ids[idIndex] }]);
        setDadosArray([...dadosArray, {id: ids[idIndex], 'refeicao': '', 'calorias': 0}])
        const novoid = [...ids];
        novoid[idIndex] += 1;
        setIds(novoid);
        
    };
    
    const removerInput = (inputArray, setInputArray, dadosArray, setDadosArray, id) => {
        const novosInputs = inputArray.filter(input => input.id !== id);
        setInputArray(novosInputs);

        const novosDados = dadosArray.filter(dado => dado.id !== id);
        setDadosArray(novosDados);
        
    };

    const setDadosRefeicao = (key, tipo, value, inputChange, setInputChange) => {
        const novoDadosant = [...inputChange];
        const index = novoDadosant.findIndex(item => item.id === key);
        console.log("-=-=-==------------------------------" + setInputChange)
        if(index != -1){
            // console.log(value);
            // novoDadosant[index] = {"id": key, "nomeComida": "aaaaaa", "calorias": 10};
            if(tipo == 0)
                novoDadosant[index].refeicao = value;
            else
                novoDadosant[index].calorias = value;
        }
        setInputChange(novoDadosant);
        // if(setInputChange == "cafe"){
        //     console.log(value);
        //     console.log(novoDadosant);
        //     setCafed(novoDadosant); //prevState => [...prevState, ...novoDadosant]
        // }
        // else if(setInputChange == "almoco")
        //     setAlmocod(novoDadosant);
        // else if(setInputChange == "lanche")
        //     setLanched(novoDadosant);
        // else if(setInputChange == "janta")
        //     setJantad(novoDadosant);
        // console.log(inputChange);
    };

    const [visivela, toggleModall] = useState(false);
    const MudarModal = () => {
        toggleModall(!visivela);
    }
    const enviarDados = () => {
        // const dataA = DataAtual();
        // const data = {"dataCriacao": dataA, "Dieta": [
        //     dadosDieta,
        //     {"cafe": cafeDados},
        //     {"almoco": almocoDados},
        //     {"lanche": lancheDados},
        //     {"janta": jantaDados},
        // ]};
        // console.log(data);
        // console.log("-----------=-=-==-=-==-=-------------");
        // dispatch(addDieta(data));
        // MudarModal();
    };

    return(
        <StyledViewForm>
            <Modal visivel={visivela} toggleModal={MudarModal} msg={"Dieta cadastrada!"} />
            <StyledScroolView>
                {/* <StyledTextDefault>Descrição:</StyledTextDefault> */}
                <StyledTitleText>{item.Dieta[0]}</StyledTitleText>
                {/* <StyledInputDefault placeholder="Descrição" onChangeText={(valorT) => {setDadosDieta(valorT)}} /> */}

                <AddItem label="Adicionar café da manhã" onAdd={() => {adicionarInput(cafeInput, setCafeInput, cafeDados, setCafed, 0)}} />
                {cafeInput.map(inp => (
                    <InputField key={inp.id} 
                    placeholder="Nome da comida" 
                    idU={inp.id} 
                    onRemove={() => removerInput(cafeInput, setCafeInput, cafeDados, setCafed, inp.id)} 
                    setDadosArrayU={setDadosRefeicao}
                    inputDadosC={cafeDados}
                    setNovosDadosA={setCafed} //setCafed
                    valorr={cafeDados.filter((e) => e.id == inp.id)}
                    teste={setCafed}

                    />
                ))}
                
                <AddItem label="Adicionar almoço" onAdd={() => {adicionarInput(almocoInput, setAlmocoInput, almocoDados, setAlmocod, 1)}} />
                {almocoInput.map(inp => (
                    <InputField key={inp.id} 
                    placeholder="Nome da comida" 
                    idU={inp.id} 
                    onRemove={() => removerInput(almocoInput, setAlmocoInput, almocoDados, setAlmocod, inp.id)} 
                    setDadosArrayU={setDadosRefeicao}
                    inputDadosC={almocoDados}
                    setNovosDadosA={setAlmocod} //setAlmocod
                    valorr={almocoDados.filter((e) => e.id == inp.id)}
                    teste={setAlmocod}
                    />
                ))}
                
                <AddItem label="Adicionar lanche da tarde" onAdd={() => {adicionarInput(lancheInput, setLancheInput, lancheDados, setLanched, 2)}} />
                {lancheInput.map(inp => (
                    <InputField key={inp.id} 
                    placeholder="Nome da comida" 
                    idU={inp.id} 
                    onRemove={() => removerInput(lancheInput, setLancheInput, lancheDados, setLanched, inp.id)} 
                    setDadosArrayU={setDadosRefeicao}
                    inputDadosC={lancheDados}
                    setNovosDadosA={setLanched} //setLanched
                    valorr={lancheDados.filter((e) => e.id == inp.id)}
                    teste={setLanched}
                    />
                ))}
                <AddItem label="Adicionar janta" onAdd={() => {adicionarInput(jantaInput, setJantaInput, jantaDados, setJantad, 3)}} />
                {jantaInput.map(inp => (
                    <InputField key={inp.id} 
                    placeholder={"Nome da comida"} 
                    idU={inp.id} 
                    onRemove={() => {removerInput(jantaInput, setJantaInput, jantaDados, setJantad, inp.id)}} 
                    setDadosArrayU={setDadosRefeicao}
                    inputDadosC={jantaDados}
                    setNovosDadosA={setJantad} //setJantad
                    valorr={jantaDados.filter((e) => e.id == inp.id)}
                    teste={setJantad}
                    />
                ))}
                
            </StyledScroolView>

                <StyledFixedBtn onPress={enviarDados} >
                    <StyledTextCreate>Criar</StyledTextCreate>
                </StyledFixedBtn>
        </StyledViewForm>
    );
}


const AddItem = ({ label, onAdd }) => (
    <StyledTextWBtn>
        <StyledTextDefault>{label}</StyledTextDefault>
        <StyledTBtnInline onPress={onAdd}><StyledPlus2>+</StyledPlus2></StyledTBtnInline>
    </StyledTextWBtn>
);
//setDadosArrayU
const InputField = ({ placeholder, idU, onRemove, setDadosArrayU, inputDadosC, setNovosDadosA, valorr,teste }) => {
    
    const setDadosRefeicao = (key, tipo, value, inputChange, setInputChange) => {
        const novoDadosant = [...inputChange];
        const index = novoDadosant.findIndex(item => item.id === key);
        console.log("-=-=-==------------------------------" + setInputChange)
        if(index != -1){
            if(tipo == 0)
                novoDadosant[index].refeicao = value;
            else
                novoDadosant[index].calorias = value;
        }
        setInputChange(novoDadosant);
        // setNovosDadosA(novoDadosant);
        console.log(novoDadosant)
        // teste(novoDadosant);
        // console.log(setNovosDadosA);
    };

    return(
    <StyledInputsWBtn>
        <StyledInputInline placeholder={placeholder} value={valorr[0].refeicao != null ? valorr[0].refeicao : ""} onChangeText={(valorT) => {setDadosRefeicao(idU, 0, valorT, inputDadosC, setNovosDadosA)}} />
        <StyledInputNumber keyboardType="numeric" value={valorr[0].calorias} onChangeText={(valorT) => {setDadosRefeicao(idU, 1, valorT, inputDadosC, setNovosDadosA)}} placeholder="Cal"/>
        <StyledTBtnInline style={{backgroundColor: 'white'}} onPress={onRemove} ><StyledMinus>-</StyledMinus></StyledTBtnInline>
    </StyledInputsWBtn>
)};

