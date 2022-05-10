import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useMoodContext } from '../context/Mood.provider';
import MoodItemRow from '../components/MoodItemRow';

const History: FC = () => {
  const { moodList } = useMoodContext();
  return (
    <View>
      {moodList.map(item => (
        <MoodItemRow key={item.timestamp} item={item} />
      ))}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({});
