import React, { FC } from 'react';
import Explore from '../screens/Explore.';
import Profile from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RestaurantsStackNav, {
  RestaurantsStackParams,
} from './RestaurantsStackNav';
import ExploreStackNav, { ExploreStackParams } from './ExploreStackNav';
import { NavigatorScreenParams } from '@react-navigation/native';
import ExploreIcon from '../icons/ExploreIcon';
import ProfileIcon from '../icons/ProfileIcon';
import RestaurantIcon from '../icons/RestaurantIcon';

export type BottomTabParams = {
  ExploreStack: NavigatorScreenParams<ExploreStackParams>;
  Profile: undefined;
  RestaurantsStack: NavigatorScreenParams<RestaurantsStackParams>;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNav: FC = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ExploreStack"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'goldenrod',
        tabBarInactiveTintColor: 'gold',
      }}>
      <BottomTab.Screen
        name="ExploreStack"
        component={ExploreStackNav}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <ExploreIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="RestaurantsStack"
        component={RestaurantsStackNav}
        options={{
          tabBarLabel: 'Restaurants',
          tabBarIcon: ({ color, size }) => (
            <RestaurantIcon color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;
