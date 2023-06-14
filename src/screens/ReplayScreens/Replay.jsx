import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {mediaJSON} from '../../assets/data/VideoData';
import VideoCard from '../../components/VideoCard';

const Replay = () => {
  console.log('mediaJSON-->', mediaJSON.categories[0].videos[0]);
  const VIDEO_DATA = mediaJSON?.categories[0]?.videos;

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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
    backgroundColor: '#000',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
