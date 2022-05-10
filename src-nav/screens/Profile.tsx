import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Profile: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: Pankaj Kumar Mishra</Text>
      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: '600',
    color: '#000',
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'pink',
    padding: 15,
    borderRadius: 10,
  },
});
