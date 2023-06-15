import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Colors} from '../assets/colors/Colors';

const VideoPlayerControls = props => {
  const {playing, onPlay, onPause, skipForwards, skipBackwards} = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        <MaterialIcons
          size={24}
          color={Colors.PrimaryIconColor}
          name="replay-10"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          <MaterialCommunityIcons
            size={50}
            color={Colors.PrimaryIconColor}
            name="pause-circle-outline"
          />
        ) : (
          <MaterialCommunityIcons
            size={50}
            color={Colors.PrimaryIconColor}
            name="play-circle-outline"
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <MaterialIcons
          size={24}
          color={Colors.PrimaryIconColor}
          name="forward-10"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});

export default VideoPlayerControls;
