import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/RootStackNav';

const Menu: FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Navigation Menu</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Explore');
        }}>
        <Text>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Profile');
        }}>
        <Text>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Restaurants');
        }}>
        <Text>Restaurants</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    marginTop: 20,
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'goldenrod',
    padding: 15,
    borderRadius: 10,
    marginBottom: 6,
  },
});
