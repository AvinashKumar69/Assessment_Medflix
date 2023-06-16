import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from '../../assets/colors/Colors';
import {mediaJSON} from '../../assets/data/VideoData';
import FilterByTopic from '../../components/FilterByTopic';
import VideoCard from '../../components/VideoCard';

const Replay = () => {
  const VIDEO_DATA = mediaJSON?.categories[0]?.videos;

  return (
    <SafeAreaView style={styles.container}>
      <FilterByTopic />
      <FlatList
        data={VIDEO_DATA}
        renderItem={({item}) => <VideoCard data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Replay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal:'5%',
    backgroundColor: Colors.PrimaryBG,
  },
});
