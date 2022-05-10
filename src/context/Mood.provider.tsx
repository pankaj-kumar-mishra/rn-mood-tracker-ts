import React, {
  FC,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MoodOptionType, MoodOptionWithTimestampType } from '../types';

type MoodData = {
  moodList: MoodOptionWithTimestampType[];
};

export const moodKey = '@moodList';

const getMoodData = async (): Promise<MoodData | null> => {
  try {
    const lists = await AsyncStorage.getItem(moodKey);
    if (lists) {
      return JSON.parse(lists);
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
const setMoodData = async (moodData: MoodData): Promise<void> => {
  try {
    await AsyncStorage.setItem(moodKey, JSON.stringify(moodData));
  } catch (error) {
    console.log(error);
  }
};

type MoodContextType = {
  moodList: MoodOptionWithTimestampType[];
  handleMoodChoose: (selectedMood: MoodOptionType) => void;
};

const MoodContext = createContext<MoodContextType>({
  moodList: [],
  handleMoodChoose: () => {},
});
export const useMoodContext = () => useContext(MoodContext);

const MoodProvider: FC = ({ children }) => {
  const [moodList, setMoodList] = useState<MoodOptionWithTimestampType[]>([]);

  useEffect(() => {
    const fetchMoodData = async () => {
      const lists = await getMoodData();
      if (lists) {
        setMoodList(lists.moodList);
      }
    };

    fetchMoodData();
  }, []);

  const handleMoodChoose = useCallback((selectedMood: MoodOptionType) => {
    setMoodList(prev => {
      const newList = [...prev, { mood: selectedMood, timestamp: Date.now() }];
      setMoodData({ moodList: newList });
      return newList;
    });
  }, []);

  return (
    <MoodContext.Provider value={{ moodList, handleMoodChoose }}>
      {children}
    </MoodContext.Provider>
  );
};

export default MoodProvider;
