import React, { FC, useEffect, useRef } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';
import { RouteProp, ParamListBase } from '@react-navigation/native';
import { AnalyticsIcon, HistoryIcon, HomeIcon } from './Icons';

type TabBarIconProps = {
  route: RouteProp<ParamListBase, string>;
  color?: string;
  size?: number;
  focused?: boolean;
};

const TabButton: FC<{ focused: boolean }> = ({ focused, children }) => {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (focused) {
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }

    // return () => {
    //   console.log('unmounted on close app');
    // };
  }, [focused]);

  // useEffect(() => {
  //   console.log('Mounted');

  //   return () => {
  //     console.log('unmounted');
  //   };
  // }, []);

  return (
    <Animated.View style={{ transform: [{ scale }] }}>{children}</Animated.View>
  );
};

const TabBarIcon: FC<TabBarIconProps> = ({ route, color, size, focused }) => {
  // useEffect(() => {
  //   console.log('Mounted');

  //   return () => {
  //     console.log('unmounted');
  //   };
  // }, []);

  switch (route.name) {
    case 'Home':
      return (
        <TabButton focused={Boolean(focused)}>
          <HomeIcon color={color} size={size} />
        </TabButton>
      );
    case 'History':
      return (
        <TabButton focused={Boolean(focused)}>
          <HistoryIcon color={color} size={size} />
        </TabButton>
      );
    case 'Analytics':
      return (
        <TabButton focused={Boolean(focused)}>
          <AnalyticsIcon color={color} size={size} />
        </TabButton>
      );

    default:
      return <Text>{route.name}</Text>;
  }
};

export default TabBarIcon;
