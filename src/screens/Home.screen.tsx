import React, { FC } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
// import AppText from '../components/AppText';

import MoodPicker from '../components/MoodPicker';
import { useMoodContext } from '../context/Mood.provider';

const imageUrl =
  'https://images.unsplash.com/photo-1474540412665-1cdae210ae6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1766&q=80';

const Home: FC = () => {
  const { handleMoodChoose } = useMoodContext();

  return (
    <>
      <ImageBackground source={{ uri: imageUrl }} style={styles.container}>
        <MoodPicker handleMoodChoose={handleMoodChoose} />

        {/* <AppText fontFamily="bold" fontSize={18}>
          Pankaj
        </AppText>
        <AppText fontFamily="italic" fontSize={12} style={{ color: 'red' }}>
          Kumar
        </AppText>
        <AppText>Mishra</AppText> */}
      </ImageBackground>
      {/* Other Way */}
      {/* <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={{ flex: 1 }} />
        <View style={[StyleSheet.absoluteFill, { justifyContent: 'center' }]}>
          <MoodPicker handleMoodChoose={handleMoodChoose} />
        </View>
      </View> */}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
