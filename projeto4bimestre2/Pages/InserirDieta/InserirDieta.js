import { useState } from "react"
import { StyledErroText, StyledFixedBtn, StyledInputDefault, StyledInputInline, StyledInputNumber, StyledInputsWBtn, StyledMinus, StyledPlus2, StyledScroolView, StyledTBtnInline, StyledTextCreate, StyledTextDefault, StyledTextWBtn, StyledViewForm } from "../../Components/Styles/Styles";
import { Button, TextInput, View } from "react-native";
import { DataAtual, Salvar } from "../../Components/SalvarDieta/SalvarDieta";
import Modal from "../../Components/Modals/Modal";
import { useDispatch } from "react-redux";
import { addDieta } from "../../Components/ReduxConfig/Reducers";

export default () => {
    const dispatch = useDispatch();
    const [dadosDieta, setDadosDieta] = useState('');

    const [cafeDados, setCafed] = useState([]); //dados de cada input de determinada refeição    =={"id": 0, "nomeComida": "", "calorias": 0}
    const [almocoDados, setAlmocod] = useState([]);
    const [lancheDados, setLanched] = useState([]);
    const [jantaDados, setJantad] = useState([]);

    const [cafeInput, setCafeInput] = useState([]); // quantidade de inputs para adicionar alimentos em determinada refeição
    const [almocoInput, setAlmocoInput] = useState([]);
    const [lancheInput, setLancheInput] = useState([]);
    const [jantaInput, setJantaInput] = useState([]);
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
        // console.log(index);
        if(index != -1){
            // novoDadosant[index] = {"id": key, "nomeComida": "aaaaaa", "calorias": 10};
            if(tipo == 0)
                novoDadosant[index].refeicao = value;
            else
                novoDadosant[index].calorias = value;
        }
        if(setInputChange == "cafe")
            setCafed(novoDadosant); //prevState => [...prevState, ...novoDadosant]
        else if(setInputChange == "almoco")
            setAlmocod(novoDadosant);
        else if(setInputChange == "lanche")
            setLanched(novoDadosant);
        else if(setInputChange == "janta")
            setJantad(novoDadosant);
        // console.log(inputChange);
    };

    const [visivela, toggleModall] = useState(false);
    const MudarModal = () => {
        toggleModall(!visivela);
    }
    const enviarDados = () => {
        const dataA = DataAtual();
        const data = {"dataCriacao": dataA, "Dieta": [
            dadosDieta,
            {"cafe": cafeDados},
            {"almoco": almocoDados},
            {"lanche": lancheDados},
            {"janta": jantaDados},
        ]};
        console.log(data);
        console.log("-----------=-=-==-=-==-=-------------");
        dispatch(addDieta(data));
        MudarModal();



    };

    return(
        <StyledViewForm>
            <Modal visivel={visivela} toggleModal={MudarModal} msg={"Dieta cadastrada!"} />
            <StyledScroolView>
                <StyledTextDefault>Digite a descrição da dieta:</StyledTextDefault>
                <StyledInputDefault placeholder="Descrição" onChangeText={(valorT) => {setDadosDieta(valorT)}} />

                <AddItem label="Adicionar café da manhã" onAdd={() => {adicionarInput(cafeInput, setCafeInput, cafeDados, setCafed, 0)}} />
                {cafeInput.map(inp => (
                    <InputField key={inp.id} 
                    placeholder="Nome da comida" 
                    idU={inp.id} 
                    onRemove={() => removerInput(cafeInput, setCafeInput, cafeDados, setCafed, inp.id)} 
                    setDadosArrayU={setDadosRefeicao}
                    inputDadosC={cafeDados}
                    setinputDadosC={"cafe"} //setCafed
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
                    setinputDadosC={"almoco"} //setAlmocod
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
                    setinputDadosC={"lanche"} //setLanched
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
                    setinputDadosC={"janta"} //setJantad
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
const InputField = ({ placeholder, idU, onRemove, setDadosArrayU, inputDadosC, setInputDadosC }) => (
    <StyledInputsWBtn>
        <StyledInputInline placeholder={placeholder} onChangeText={(valorT) => {setDadosArrayU(idU, 0, valorT, inputDadosC, setInputDadosC)}} />
        <StyledInputNumber keyboardType="numeric" onChangeText={(valorT) => {setDadosArrayU(idU, 1, valorT, inputDadosC, setInputDadosC)}} placeholder="Cal"/>
        <StyledTBtnInline style={{backgroundColor: 'white'}} onPress={onRemove} ><StyledMinus>-</StyledMinus></StyledTBtnInline>
    </StyledInputsWBtn>
);

