import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './Components/ReduxConfig/Store';
import Navg from './Components/Navegacao/Navg';

export default function App() {
  return (
    <Provider store={store}>
      <Navg style={styles.container}/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
