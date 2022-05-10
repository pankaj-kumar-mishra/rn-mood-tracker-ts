import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '../screens/Explore.';
import Restaurant from '../screens/Restaurant';

export type ExploreStackParams = {
  Explore: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<ExploreStackParams>();

const ExploreStackNav: FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Explore"
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Explore" component={Explore} />
      <RootStack.Screen name="Restaurant" component={Restaurant} />
    </RootStack.Navigator>
  );
};

export default ExploreStackNav;
