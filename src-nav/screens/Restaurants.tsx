import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import RestaurantCard from '../components/RestaurantCard';
import { BottomTabParams } from '../navigation/BottomTabNav';
import { RootStackParams } from '../navigation/RootStackNav';

// type Props = NativeStackScreenProps<RootStackParams, 'Restaurants'>;
type Props = NativeStackScreenProps<BottomTabParams, 'RestaurantsStack'>;

const Restaurants: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants</Text>
      <ScrollView>
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
        <RestaurantCard
          name="Village Style Restaurant"
          onPress={name => navigation.navigate('Restaurant', { name })}
        />
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
      </ScrollView>
      <Menu />
    </View>
  );
};

export default Restaurants;

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
