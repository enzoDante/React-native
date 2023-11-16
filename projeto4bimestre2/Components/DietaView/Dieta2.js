import { useEffect, useState } from "react";
import { StyledExpandView, StyledMinus, StyledPlus2, StyledScroolView, StyledTBtnInline, StyledTextDefault, StyledTextDefault2, StyledTextExpendV, StyledTextTittle, StyledTextWBtn, StyledViewDefault, StyledViewItems, StyledViewRefeicoes, StyledTextDP } from "../Styles/Styles";
import {Text, View, ScrollView, Image} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { removeDieta } from "../ReduxConfig/Reducers";
import { CalcMedia } from "./CaloriasMedia";

// const dados = returnDados();

export default ({navigation}) => {
	const dispatch = useDispatch();
	const dietaState = useSelector(state => state.dieta);
	useState(() => {

	}, []);

	const removerDieta = (desc) => {
		dispatch(removeDieta(desc));
		console.log(dietaState);
		// setDados([...dados, ])
	}

    const [estados, setEstados] = useState(Array(dietaState.length).fill(false));
    const alterarEstado = (ind) => {
        const novosEstados = [...estados];
        novosEstados[ind] = !novosEstados[ind];
        setEstados(novosEstados);
    }

    return(
        <StyledScroolView>
            <StyledViewDefault>
                {dietaState.map((item, index) => (
                    <StyledViewItems key={item.dataCriacao+item.Dieta[0]}>
                        <StyledExpandView onPress={() => {alterarEstado(index);}}>
                            <StyledTextExpendV >Dieta de: {item.dataCriacao} expandir</StyledTextExpendV>
                        </StyledExpandView>
						{estados[index] && (
							<>
							{item.Dieta.map((element, subIndex) => (
								<View key={subIndex}>
								{typeof element === 'string' ? (
									// Se for uma string (descrição da dieta), renderize de maneira diferente
									<StyledTextTittle>Descrição: {element}</StyledTextTittle>
								) : (
									// Caso contrário, renderize as informações da refeição
									estados[index] && element[Object.keys(element)[0]].length > 0 && (
										<StyledViewRefeicoes style={{ marginLeft: 5 }}>
											<StyledTextDefault2>{Object.keys(element)[0]}</StyledTextDefault2>
											{element[Object.keys(element)[0]].map((alimento, alimentoIndex) => (
											<View key={alimentoIndex}>
												{/*  */}
												<StyledTextDefault style={{textDecorationLine: "underline"}} >
												{alimento.refeicao} - Calorias: {alimento.calorias}
												</StyledTextDefault>
											</View>
											))}
											{/* media por refeição e desvio padrão de cada refeição! */}
											<StyledTextDP>Média de calorias: {CalcMedia(element[Object.keys(element)[0]])}</StyledTextDP>
										</StyledViewRefeicoes>
									)
								)}
								</View>
							))}
							<StyledTextWBtn style={{backgroundColor: 'transparent',  }}>
								<StyledTBtnInline style={{backgroundColor: 'white'}} onPress={() => {removerDieta(item.Dieta[0])}} ><StyledMinus style={{color: 'red'}}>-</StyledMinus></StyledTBtnInline>

								<StyledTBtnInline onPress={() => navigation.navigate('Editar Dieta', { item })} style={{backgroundColor: 'white'}} ><Image source={require("./../../assets/editarX32.png")} /></StyledTBtnInline>
							</StyledTextWBtn>
							</>
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