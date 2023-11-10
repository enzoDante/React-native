import { useState } from "react"
import { StyledErroText, StyledInputDefault, StyledPlus2, StyledTBtnInline, StyledTextDefault, StyledTextWBtn, StyledViewForm } from "../../Components/Styles/Styles";
import { Button, TextInput, View } from "react-native";

export default () => {
    const [dadosDieta, setDadosDieta] = useState();

    const [cafeDados, setCafed] = useState([{"nomeComida": "", "calorias": 0}]); //dados de cada input de determinada refeição
    const [almocoDados, setAlmocod] = useState([{"nomeComida": "", "calorias": 0}]);
    const [lancheDados, setLanched] = useState([{"nomeComida": "", "calorias": 0}]);
    const [jantaDados, setJantad] = useState([{"nomeComida": "", "calorias": 0}]);

    const [cafeInput, setCafeInput] = useState([]); // quantidade de inputs para adicionar alimentos em determinada refeição
    const [almocoInput, setAlmocoInput] = useState([]);
    const [lancheInput, setLancheInput] = useState([]);
    const [jantaInput, setJantaInput] = useState([]);
    const [ids, setIds] = useState([0, 0, 0, 0]);
    
    const adicionarInput = (inputArray, setInputArray, idIndex) => {
        setInputArray([...inputArray, { id: ids[idIndex] }]);
        const novoid = [...ids];
        novoid[idIndex] += 1;
        setIds(novoid);
    };
    
      const removerInput = (inputArray, setInputArray, id) => {
        const novosInputs = inputArray.filter(input => input.id !== id);
        setInputArray(novosInputs);
    };

    return(
        <StyledViewForm>
            <StyledTextDefault>Digite a descrição da dieta:</StyledTextDefault>
            <StyledInputDefault placeholder="Descrição" onChangeText={(valorT) => {setUser({ ...User, nome: valorT }); validar('nome', valorT);}} />

            <AddItem label="Adicionar café da manhã" onAdd={() => {adicionarInput(cafeInput, setCafeInput, 0)}} />
            {cafeInput.map(inp => (
                <InputField key={inp.id} placeholder="Nome da comida" onRemove={() => removerInput(cafeInput, setCafeInput, inp.id)} />
            ))}
            
            <AddItem label="Adicionar almoço" onAdd={() => {adicionarInput(almocoInput, setAlmocoInput, 0)}} />
            {almocoInput.map(inp => (
                <InputField key={inp.id} placeholder="Nome da comida" onRemove={() => removerInput(almocoInput, setAlmocoInput, inp.id)} />
            ))}
            

            <AddItem label="Adicionar lanche da tarde" onAdd={() => {adicionarInput(lancheInput, setLancheInput, 0)}} />
            {lancheInput.map(inp => (
                <InputField key={inp.id} placeholder="Nome da comida" onRemove={() => removerInput(lancheInput, setLancheInput, inp.id)} />
            ))}


            <AddItem label="Adicionar janta" onAdd={() => {adicionarInput(jantaInput, setJantaInput, 0)}} />
            {jantaInput.map(inp => (
                <InputField key={inp.id} placeholder={"Nome da comida"} onRemove={() => {removerInput(jantaInput, setJantaInput, inp.id)}} />
            ))}

            <StyledErroText>errooo</StyledErroText>
        </StyledViewForm>
    );
}


const AddItem = ({ label, onAdd }) => (
    <StyledTextWBtn>
        <StyledTextDefault>{label}</StyledTextDefault>
        <StyledTBtnInline onPress={onAdd}><StyledPlus2>+</StyledPlus2></StyledTBtnInline>
    </StyledTextWBtn>
);

//keyboardType="numeric" dentro do textInput --- ideia: texto | calorias | btnremover   ***definir um estilo para o campo numérico!! e diminuir o tamanho do campo texto
const InputField = ({ placeholder, onRemove }) => (
    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
        <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1, marginRight: 10 }} placeholder={placeholder} />
        <Button title="Remover" onPress={onRemove} />
    </View>
);
//ideia
/**
 * separar em secoes: cafe, almoco, lanche e janta
 * cada um terá um + do lado para adicionar um novo alimento em alguma das categorias
 */