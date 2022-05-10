import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import BottomTabs from './navigators/BottomTab.navigator';
import MoodProvider from './context/Mood.provider';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MoodProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </MoodProvider>
  );
};

export default App;
