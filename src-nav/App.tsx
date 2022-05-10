import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { FC, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import RootStackNav from './navigation/RootStackNav';
import BottomTabNav from './navigation/BottomTabNav';

const App: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        {/* <RootStackNav /> */}
        <BottomTabNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
