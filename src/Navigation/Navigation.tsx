import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Home from '../Screens/Home';
import Game from '../Screens/Game';
import Name from '../Screens/Name';

const Navigation = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
};

const Stack = createNativeStackNavigator();

export default Navigation;
