import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home.screen';
import History from '../screens/History.screen';
import Analytics from '../screens/Analytics.screen';
import TabBarIcon from '../components/TabBarIcon';
import { theme } from '../theme';

const BTabs = createBottomTabNavigator();

const BottomTabs: FC = () => {
  return (
    <BTabs.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: theme.fontFamilyBold,
          color: theme.colorBlue,
        },
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarIcon: ({ color, size, focused }) => (
          <TabBarIcon
            route={route}
            color={color}
            size={size}
            focused={focused}
          />
        ),
      })}>
      <BTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BTabs.Screen
        name="History"
        component={History}
        options={{ title: 'Past Moods' }}
      />
      <BTabs.Screen
        name="Analytics"
        component={Analytics}
        options={{ title: 'Fancy Graphs' }}
      />
    </BTabs.Navigator>
  );
};

export default BottomTabs;
