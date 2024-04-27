// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import EntryForms from './components/EntryForms';
import OptionsNavigation from './components/OptionsNavigation';
import Catalog from './components/Catalog';
import Details from './components/Details';





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
