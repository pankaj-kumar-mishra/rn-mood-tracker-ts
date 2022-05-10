import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  name: string;
  onPress: (name: string) => void;
}

const RestaurantCard: FC<Props> = ({ name, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(name)}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});
