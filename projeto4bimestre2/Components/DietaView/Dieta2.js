import { useEffect, useState } from "react";
import { StyledExpandView, StyledScroolView, StyledTextExpendV, StyledViewDefault, StyledViewItems } from "../Styles/Styles";
import {Text, View, ScrollView} from 'react-native';
import { returnDados } from "../BancoDados/Banco_Dados";

// const dados = returnDados();

export default () => {
    const [estados, setEstados] = useState(Array(dados.length).fill(false));
    const [dados, setDados] = useState();
    const alterarEstado = (ind) => {
        const novosEstados = [...estados];
        novosEstados[ind] = !novosEstados[ind];
        setEstados(novosEstados);
    }
    useEffect(() => {
        setDados(returnDados())
    }, []);
    // const dados = returnDados();

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