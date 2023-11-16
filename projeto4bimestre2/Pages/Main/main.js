import { useDispatch, useSelector } from "react-redux";
import Dieta from "../../Components/DietaView/Dieta";
import Dieta2 from "../../Components/DietaView/Dieta2";
import { StyledTBtn, StyledTBtn2, StyledTextDefault, StyledViewDefault, Styledplus, StyledTextWBtn, StyledViewWBtns, StyledImageIcon, StyledImageView } from "../../Components/Styles/Styles";
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { removeDieta } from "../../Components/ReduxConfig/Reducers";
import { useState } from "react";

export default ({navigation}) => {
    const dispatch = useDispatch();
    const dietaState = useSelector(state => state.dieta);

    const [tes, setTes] = useState([]);
    const btn = () => {
        console.log(dietaState);
        dietaState.forEach(element => {
            // setTes([]);
            // for(let i = 1; i <= 4; i++){
            //     const testea = JSON.parse(element.Dieta[i]);
            //     setTes([...tes, testea]);
            // }
            // console.log(tes)
            console.log("=============");
            const a = 1;
            console.log(element)
            console.log(element.Dieta);
			console.log(element.Dieta[1].cafe[0]);
            // { "datacriaaco": "1234132", "Dieta": ["desc", {"cafe": [ {} ] }, {"almoco": [ {} ] }, {}, {}]  }
            const testea = element.Dieta[1];
            console.log("aaaaaaaaaa");
            // console.log(JSON.parse(testea));

            // console.log(JSON.parse(element.Dieta));

            // const testeaaa = JSON.parse(element.Dieta[1]);
            // console.log(element.Dieta[1]);
            // console.log(element.dataCriacao);
            
		});
    }

    return(
        <StyledViewDefault>
            <StyledViewWBtns>
                {/* <StyledTextDefault>Adicionar Dieta</StyledTextDefault> */}
                <StyledTBtn onPress={() => navigation.navigate('Criar Dieta')}><Styledplus>+</Styledplus></StyledTBtn>
                <StyledTBtn2 onPress={() => navigation.navigate('Relatório')} >
                    <StyledImageView>
                        <StyledImageIcon resizeMode="contain" source={require("./../../assets/relatorio2X64.png")} /> 
                    </StyledImageView>                   
                </StyledTBtn2>
            </StyledViewWBtns>

            <Dieta2 navigation={navigation} />
            
        </StyledViewDefault>
    );
}