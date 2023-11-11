import Dieta from "../../Components/DietaView/Dieta";
import Dieta2 from "../../Components/DietaView/Dieta2";
import { StyledTBtn, StyledTextDefault, StyledViewDefault, Styledplus } from "../../Components/Styles/Styles";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

export default ({navigation}) => {

    return(
        <StyledViewDefault>
            <StyledTextDefault>Adicionar Dieta</StyledTextDefault>
            <StyledTBtn onPress={() => navigation.navigate('Criar Dieta')}><Styledplus>+</Styledplus></StyledTBtn>

            <Dieta />

        </StyledViewDefault>
    );
}