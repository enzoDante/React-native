import { useState } from "react";
import { StyledExpandView, StyledScroolView, StyledTextExpendV, StyledViewDefault, StyledViewItems } from "../Styles/Styles";
import {Text, View, ScrollView} from 'react-native';

const dados = [
    {"dataCriacao": "10/10/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe:": [{"refeicao": "pão", "calorias": 30}, {"refeicao": "suco de laranja", "calorias": 10},]},
        {"almoco:": [{"refeicao": "macarrão", "calorias": 50}, {"refeicao": "assinha de frango", "calorias": 150},]},
        {"lanche:": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta:": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "13/10/2023", "Dieta": [
        {"cafe:": [{"refeicao": "pão", "calorias": 30}, {"refeicao": "suco de laranja", "calorias": 10},]},
        {"almoco:": [{"refeicao": "macarrão", "calorias": 50}, {"refeicao": "assinha de frango", "calorias": 150},]},
        {"lanche:": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta:": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "13/11/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe:": [{"refeicao": "pão", "calorias": 30}, {"refeicao": "suco de laranja", "calorias": 10},]},
        {"almoco:": [{"refeicao": "macarrão", "calorias": 50}, {"refeicao": "assinha de frango", "calorias": 150},]},
        {"lanche:": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta:": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
];
export default () => {
    const [estados, setEstados] = useState(Array(dados.length).fill(false));
    const alterarEstado = (ind) => {
        const novosEstados = [...estados];
        novosEstados[ind] = !novosEstados[ind];
        setEstados(novosEstados);
    }

    return(
        <StyledScroolView>
            <StyledViewDefault>
                {dados.map((item, index) => (
                    <StyledViewItems key={item.dataCriacao}>
                        <StyledExpandView onPress={() => {alterarEstado(index);}}>
                            <StyledTextExpendV >Dieta de: {item.dataCriacao} expandir</StyledTextExpendV>
                        </StyledExpandView>
                    {estados[index] && (
                        item.Dieta.map((element, subIndex) => (
                            <View key={subIndex}>
                              {typeof element === 'string' ? (
                                // Se for uma string (descrição da dieta), renderize de maneira diferente
                                <Text style={{ marginLeft: 10 }}>{element}</Text>
                              ) : (
                                // Caso contrário, renderize as informações da refeição
                                estados[index] && (
                                  <View style={{ marginLeft: 20 }}>
                                    <Text>{Object.keys(element)[0]}</Text>
                                    {element[Object.keys(element)[0]].map((alimento, alimentoIndex) => (
                                      <View key={alimentoIndex}>
                                        <Text>
                                          {alimento.refeicao} - Calorias: {alimento.calorias}
                                        </Text>
                                      </View>
                                    ))}
                                  </View>
                                )
                              )}
                            </View>
                        ))
                    )}
                    </StyledViewItems>
                    
                ))}
            </StyledViewDefault>
        </StyledScroolView>
    )
}
//<itemDieta item={items}></itemDieta>
export const itemDieta = ({item}) => {
    const [expandido, setExpandido] = useState(false);
    return(
        <></>
    );


}