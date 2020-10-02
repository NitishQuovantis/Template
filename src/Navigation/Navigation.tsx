import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackType, RootStackType} from './NavigationType';

import {SplashScreen, Home} from '../Screens';

// Before adding new screen to the stack, please add it in the type with the parameter it can receive
const AppStack = createStackNavigator<AppStackType>();
const RootStack = createStackNavigator<RootStackType>();

const App: React.FC<{}> = () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
};

const Navigation: React.FC<{}> = () => (
  <NavigationContainer>
    <RootStack.Navigator headerMode="none">
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
      <RootStack.Screen name="App" component={App} />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
