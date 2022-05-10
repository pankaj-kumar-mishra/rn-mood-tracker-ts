import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Splash } from '../screens';
import TabNavigator from './TabNavigator';

const MainStack = createStackNavigator();

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack;

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="Tabs" component={TabNavigator} />
    </Navigator>
  );
};

export default MainNavigator;
