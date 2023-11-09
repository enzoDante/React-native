import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cadastro from "../../Pages/Cadastro/Cadastro";

const Stack = createStackNavigator();
export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cadastro">
                <Stack.Screen name="Cadastro" component={Cadastro} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}