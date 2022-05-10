import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';
import { BottomTabParams } from '../navigation/BottomTabNav';
import { RootStackParams } from '../navigation/RootStackNav';

// type Props = NativeStackScreenProps<RootStackParams, 'Explore'>;
type Props = NativeStackScreenProps<BottomTabParams, 'ExploreStack'>;

const Explore: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore (Restaurants)</Text>
      <RestaurantCard
        name="Sushi Restaurant"
        onPress={name =>
          navigation.navigate('RestaurantsStack', {
            screen: 'Restaurant',
            params: { name: 'Hello From Explore (Sushi)' },
          })
        }
        // onPress={name => navigation.navigate('Restaurant', { name })}
      />
      <RestaurantCard
        name="Burger Restaurant"
        onPress={name => navigation.navigate('Restaurant', { name })}
      />
      <RestaurantCard
        name="Fine dining Restaurant"
        onPress={name => navigation.navigate('Restaurant', { name })}
      />
      <Text>Most Popular Restaurants</Text>
      <RestaurantCard
        name="Sushi Restaurant"
        onPress={name => navigation.navigate('Restaurant', { name })}
      />
      <RestaurantCard
        name="Burger Restaurant"
        onPress={name => navigation.navigate('Restaurant', { name })}
      />
      <RestaurantCard
        name="Fine dining Restaurant"
        onPress={name => navigation.navigate('Restaurant', { name })}
      />

      <Menu />
    </View>
  );
};

export default Explore;

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
