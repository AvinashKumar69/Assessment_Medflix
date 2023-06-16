import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

import {Colors} from '../assets/colors/Colors';
import {exploreByTopic} from '../assets/data/ExploreByTopicData';

const FilterByTopic = () => {
  const EXPLORE_BY_TOPIC_DATA = exploreByTopic;

  return (
    <View style={styles.exploreByTopic_mainContainer}>
      <View>
        <Text style={styles.exploreByTopic_headingText}>Explore by Topic</Text>
      </View>
      <View style={styles.exploreByTopic_container}>
        {EXPLORE_BY_TOPIC_DATA?.map((item, i) => (
          <Button
            key={String(i)}
            mode="contained"
            buttonColor={Colors.PrimaryBG}
            textColor="#4fbee0"
            style={styles.exploreByTopic_buttonStyle}
            labelStyle={styles.exploreByTopic_buttonLabelStyle}
            onPress={() =>
              console.log('Explore by Topic Button Pressed:-', item)
            }>
            {item}
          </Button>
        ))}
      </View>
    </View>
  );
};

export default FilterByTopic;

const styles = StyleSheet.create({
  exploreByTopic_mainContainer: {
    paddingVertical: '5%',
  },
  exploreByTopic_headingText: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.PrimaryTextColor,
    paddingVertical: '3%',
  },
  exploreByTopic_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  exploreByTopic_text: {
    color: '#4fbee0',
    alignItems: 'center',
  },
  exploreByTopic_buttonStyle: {
    borderWidth: 1,
    borderColor: '#4fbee0',
    marginHorizontal: 2,
    marginVertical: 5,
  },
  exploreByTopic_buttonLabelStyle: {
    fontSize: 14,
    fontWeight: 600,
  },
});
