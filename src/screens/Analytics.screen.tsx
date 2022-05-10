import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { useMoodContext } from '../context/Mood.provider';
import { theme } from '../theme';

// TODO need to convert this function to Typescript Function
const groupBy = (arr: MapMoodListType[], key: string): object => {
  return arr.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

// const groupBy = <A>(arr: A[], key: string) => {
//   return arr.reduce((rv, x) => {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// };

type DataType = {
  x: string;
  y: number;
};

type MapMoodListType = {
  emoji: string;
  description: string;
};

const Analytics: FC = () => {
  const { moodList } = useMoodContext();
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    console.log('1**', moodList);
    const mapMoodList = moodList.map(x => ({ ...x.mood }));
    const grpResult = groupBy(mapMoodList, 'emoji');
    // const grpResult = groupBy<MapMoodListType>(mapMoodList, 'emoji');
    console.log('2**', grpResult);
    const result = Object.entries(grpResult);
    console.log('3**', result);
    const finalResult = result.map(([key, value]) => ({
      x: key,
      y: value.length,
    }));
    console.log('4**', finalResult);
    setData(finalResult);
  }, []);

  return (
    <View style={styles.container}>
      <VictoryPie
        labelRadius={80}
        //radius={150}
        innerRadius={50}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
        style={{ labels: { fontSize: 30 } }}
        data={data}
      />
    </View>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
