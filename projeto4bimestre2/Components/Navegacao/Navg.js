import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Cadastro from "../../Pages/Cadastro/Cadastro";
import { StatusBar } from "expo-status-bar";
import Login from "../../Pages/Cadastro/Login";
import Index from '../../Pages/Main/main';
import InserirDieta from "../../Pages/InserirDieta/InserirDieta";
import RelatorioGeral from "../../Pages/Relatorios/RelatorioGeral";

const Stack = createStackNavigator();
export default () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="index">
                <Stack.Screen name="Home" component={Index} options={{ headerLeft: () => null }} />
                <Stack.Screen name="Criar Dieta" component={InserirDieta} />
                <Stack.Screen name="Relatório" component={RelatorioGeral} />

                {/* <Stack.Screen name="Cadastro" component={Cadastro} /> */}
                {/* somente remove seta de voltar no q tem o comando options */}
                {/* <Stack.Screen name="Login" component={Login} options={{ headerLeft: () => null }} />  */}

            </Stack.Navigator>
            <StatusBar style="auto"/>
        </NavigationContainer>
    )
}