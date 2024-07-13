import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Game from '../Screens/Game';
import Name from '../Screens/Name';
import Splash from '../Screens/Splash';

const Navigation = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewGame"
              component={Game}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Name"
              component={Name}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator();

export default Navigation;