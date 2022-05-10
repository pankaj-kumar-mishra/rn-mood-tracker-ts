import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import BackIcon from '../icons/BackIcon';

const TopBackHeader: FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor="gold"
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <BackIcon color="#333" size={20} />
      </TouchableHighlight>
    </View>
  );
};

export default TopBackHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  backBtn: {
    borderRadius: 6,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
});
