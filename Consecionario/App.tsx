// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Components/HomeScreen';
import EntryForms from './src/Components/EntryForms';
import OptionsNavigation from './src/Components/OptionsNavigation';
import Catalog from './src/Components/Catalog';
import Details from './src/Components/Details';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EntryForms" component={EntryForms} />
        <Stack.Screen name="OptionsNavigation" component={OptionsNavigation} />
        <Stack.Screen name="Catalog" component={Catalog} />
        <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
