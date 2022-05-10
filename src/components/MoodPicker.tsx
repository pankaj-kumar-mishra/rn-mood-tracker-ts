import React, { FC, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { theme } from '../theme';
import { MoodOptionType } from '../types';

const imgSrc = require('../../assets/butterflies.png');

const moodOptions: MoodOptionType[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

type MoodPickerProps = {
  handleMoodChoose: (moodOption: MoodOptionType) => void;
};

const MoodPicker: FC<MoodPickerProps> = ({ handleMoodChoose }) => {
  const [selectedMood, setSelectedMood] = useState<MoodOptionType | null>(null);
  const [hasSelected, setHasSelected] = useState<boolean>(false);

  const handleChoose = useCallback(() => {
    if (selectedMood) {
      handleMoodChoose(selectedMood);
      setSelectedMood(null);
      setHasSelected(true);
    }
  }, [selectedMood]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Thank you 👍</Text>
        <Image source={imgSrc} style={styles.image} />
        <Pressable onPress={() => setHasSelected(false)} style={styles.button}>
          <Text style={styles.buttonText}>Choose another!</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map(option => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelectedMood(option)}
              style={[
                styles.moodItem,
                selectedMood?.emoji === option.emoji && styles.selectedMoodItem,
              ]}>
              <Text style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>
              {selectedMood?.emoji === option.emoji ? option?.description : ' '}
            </Text>
          </View>
        ))}
      </View>
      <Pressable onPress={handleChoose} style={styles.button}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

export default MoodPicker;

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24,
    fontFamily: theme.fontFamilyRegular,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  moodItem: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite,
  },
  descriptionText: {
    color: theme.colorWhite,
    fontSize: 10,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
  },
  image: {
    alignSelf: 'center',
  },
});
