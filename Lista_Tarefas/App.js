import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home';
import EditarLista from './src/EditarLista';
import ConteudoLista from './src/ConteudoLista';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EditarLista" component={EditarLista} />
        <Stack.Screen name="ConteudoLista" component={ConteudoLista} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;