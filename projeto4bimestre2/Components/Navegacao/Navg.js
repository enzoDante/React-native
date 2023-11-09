import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cadastro from "../../Pages/Cadastro/Cadastro";
import { StatusBar } from "expo-status-bar";
import Login from "../../Pages/Cadastro/Login";

const Stack = createStackNavigator();
export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Cadastro">
                <Stack.Screen name="Cadastro" component={Cadastro} />
                {/* somente remove seta de voltar no q tem o comando options */}
                <Stack.Screen name="Login" component={Login} options={{ headerLeft: () => null }} /> 

            </Stack.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
    )
}