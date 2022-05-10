export type MoodOptionType = {
  emoji: string;
  description: string;
};

export type MoodOptionWithTimestampType = {
  mood: MoodOptionType;
  timestamp: number;
};
