import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RestaurantCard from '../components/RestaurantCard';
import TopBackHeader from '../components/TopBackHeader';
import { RootStackParams } from '../navigation/RootStackNav';

type Props = NativeStackScreenProps<RootStackParams, 'Restaurant'>;

const Restaurant: FC<Props> = ({ route, navigation }) => {
  const { name } = route.params;
  return (
    <View style={styles.container}>
      <TopBackHeader />

      <Text style={styles.title}>Restaurant: {name}</Text>

      <Text>Related Restaurants</Text>
      <RestaurantCard
        name="One"
        onPress={name => navigation.push('Restaurant', { name })}
      />
      <RestaurantCard
        name="Two"
        onPress={name => navigation.push('Restaurant', { name })}
      />
      <RestaurantCard
        name="Three"
        onPress={name => navigation.push('Restaurant', { name })}
      />
      <RestaurantCard
        name="Four"
        onPress={name => navigation.push('Restaurant', { name })}
      />
      <RestaurantCard
        name="Five"
        onPress={name => navigation.push('Restaurant', { name })}
      />
    </View>
  );
};

export default Restaurant;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
  },
});
