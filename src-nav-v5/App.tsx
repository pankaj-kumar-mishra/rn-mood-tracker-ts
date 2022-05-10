/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React, { ReactNode, useEffect } from 'react';
import { StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import MainNavigator from './navigation/Navigator';
// import MainNavigator from './navigation/Navigator1'

const App: () => ReactNode = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
