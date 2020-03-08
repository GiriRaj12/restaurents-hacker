import React from 'react';
import styles from './styles/styles.js';
import{NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './components/homePage'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name="Home" 
            component={HomePage}
            options={{title:"Restaurants"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
