import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Explore from '../screens/Explore.';
import Profile from '../screens/Profile';
import Restaurants from '../screens/Restaurants';
import Restaurant from '../screens/Restaurant';

export type RootStackParams = {
  Explore: undefined;
  Profile: undefined;
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNav: FC = () => {
  return (
    <RootStack.Navigator initialRouteName="Explore">
      <RootStack.Screen name="Explore" component={Explore} />
      <RootStack.Screen name="Profile" component={Profile} />
      <RootStack.Screen name="Restaurants" component={Restaurants} />
      <RootStack.Screen name="Restaurant" component={Restaurant} />
    </RootStack.Navigator>
  );
};

export default RootStackNav;
