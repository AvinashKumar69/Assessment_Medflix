import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../assets/colors/Colors';

const VideoCard = ({data}) => {
  const navigation = useNavigation();
  const thumbnail = data?.thumb;

  const videoClickHandler = () => {
    navigation.navigate('VideoPlayer', {
      videoData: data,
      name: data?.title,
    });
  };

  return (
    <Card style={styles.wrapperCard_topContainer} onPress={videoClickHandler}>
      <Card.Cover
        style={styles.cardCover_imageContainer}
        resizeMethod="auto"
        source={{uri: thumbnail}}
      />

      <Card.Content style={styles.cardContent_videoStatSection}>
        <View style={styles.cardContent_section}>
          <View style={styles.cardContent_subSection}>
            <MaterialCommunityIcons
              size={16}
              color={Colors.PrimaryIconColor}
              name="eye"
            />
            <Text
              variant="bodySmall"
              style={styles.cardContent_subSection_text}>
              1.5k
            </Text>
          </View>

          <View style={styles.cardContent_subSection}>
            <MaterialCommunityIcons
              size={16}
              color={Colors.PrimaryIconColor}
              name="star"
            />
            <Text
              variant="bodySmall"
              style={styles.cardContent_subSection_text}>
              4.7
            </Text>
          </View>

          <View style={styles.cardContent_subSection}>
            <Entypo
              size={16}
              color={Colors.EmbededIconColor}
              name="dot-single"
            />
            <Text
              variant="bodySmall"
              style={styles.cardContent_subSection_textGray}>
              22 days ago
            </Text>
          </View>
        </View>

        <View style={styles.cardContent_section}>
          <MaterialCommunityIcons
            size={20}
            color={Colors.PrimaryIconColor}
            name="bookmark-outline"
          />
          <MaterialCommunityIcons
            size={20}
            color={Colors.PrimaryIconColor}
            name="share-variant"
          />
        </View>
      </Card.Content>

      <Card.Content style={styles.cardContent_commentSection}>
        <MaterialCommunityIcons
          size={18}
          color={Colors.PrimaryIconColor}
          name="comment-processing"
        />
        <View style={{}}>
          <View style={styles.cardContent_subSection}>
            <Text
              variant="titleMedium"
              style={styles.cardContent_subSection_text}>
              Dr. Rajesh Kumar
            </Text>
            <Text numberOfLines={1} style={styles.cardContent_subSection_text}>
              Please send my certificate.
            </Text>
          </View>

          <View style={styles.cardContent_subSection}>
            <Text
              variant="titleMedium"
              style={styles.cardContent_subSection_text}>
              Dr. Abhinav Kumar
            </Text>
            <Text
              variant="titleSmall"
              style={styles.cardContent_subSection_text}>
              Hypoxmea
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  wrapperCard_topContainer: {
    backgroundColor: Colors.PrimaryBG,
    borderBottomEndRadius: 0,
    borderBottomStartRadius: 0,
    borderTopEndRadius: 2,
    borderTopStartRadius: 2,
    marginBottom: 15,
  },
  //
  cardCover_imageContainer: {
    marginBottom: 5,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: Colors.PrimaryBG,
  },
  //
  cardContent_videoStatSection: {
    backgroundColor: Colors.SecondaryBG,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cardContent_section: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardContent_subSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  cardContent_subSection_text: {
    color: Colors.PrimaryTextColor,
  },
  cardContent_subSection_textGray: {
    color: Colors.SecondaryTextColor,
  },
  //
  cardContent_commentSection: {
    backgroundColor: Colors.SecondaryBG,
    flexDirection: 'row',
    gap: 10,
    paddingVertical: 5,
  },
});
