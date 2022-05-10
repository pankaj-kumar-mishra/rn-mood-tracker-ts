import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurants from '../screens/Restaurants';
import Restaurant from '../screens/Restaurant';

export type RestaurantsStackParams = {
  Restaurants: undefined;
  Restaurant: {
    name: string;
  };
};

const RootStack = createNativeStackNavigator<RestaurantsStackParams>();

const RestaurantsStackNav: FC = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Restaurants" component={Restaurants} />
      <RootStack.Screen name="Restaurant" component={Restaurant} />
    </RootStack.Navigator>
  );
};

export default RestaurantsStackNav;
