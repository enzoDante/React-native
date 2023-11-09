import {createAppContainer} from 'react-navigation';
import {createStackNavigation} from 'react-navigation-stack';
import Cadastro from '../../pages/Cadastro/Cadastro';

const AppNavigator = createStackNavigation({
    Cadastrar: {screen: Cadastro},

});

export default createAppContainer(AppNavigator);