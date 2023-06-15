import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';

import {Colors} from '../../assets/colors/Colors';
import ProgressBar from '../../components/ProgressBar';
import VideoPlayerControls from '../../components/VideoPlayerControls';
import {useOrientation} from '../../customHooks/useOrientation';

const videoURL =
  'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

const windowHeight = Dimensions.get('window').width * (9 / 16);
const windowWidth = Dimensions.get('window').width;

const height = Dimensions.get('window').width;
const width = Dimensions.get('window').height;

const VideoPlayer = ({route}) => {
  const {videoData} = route.params;
  const videoRef = React.createRef();
  const orientation = useOrientation();
  // const orientation = 'PORTRAIT';

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [play, setPlay] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [showControl, setShowControl] = useState(true);

  useEffect(() => {
    if (orientation === 'PORTRAIT') {
      console.log('portrait');
      StatusBar?.setHidden(false);
    } else {
      console.log('landscape');
      StatusBar?.setHidden(true);
    }
  }, [orientation]);

  const handleOrientation = orientation => {
    if (orientation === 'LANDSCAPE') {
      setFullscreen(true);
      StatusBar.setHidden(true);
    } else {
      setFullscreen(false);
      StatusBar.setHidden(false);
    }
  };

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControl(true);
      return;
    }
    setTimeout(() => setShowControl(false), 2000);
    setPlay(true);
  };

  const handlePlay = () => {
    setTimeout(() => setShowControl(false), 500);
    setPlay(true);
  };

  const skipBackward = () => {
    videoRef.current.seek(currentTime - 10);
    setCurrentTime(currentTime - 10);
  };

  const skipForward = () => {
    videoRef.current.seek(currentTime + 10);
    setCurrentTime(currentTime + 10);
  };

  const handleControls = () => {
    if (showControl) {
      setShowControl(false);
    } else {
      setShowControl(true);
    }
  };

  const handleFullscreen = () => {
    if (fullscreen) {
      // Orientation.unlockAllOrientations();
    } else {
      // Orientation.lockToLandscapeLeft();
    }
  };

  const onLoadEnd = data => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = data => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = data => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };

  return (
    <View style={fullscreen ? styles.fullscreenContainer : styles.container}>
      <TouchableOpacity onPress={handleControls}>
        <Video
          ref={videoRef}
          source={{
            uri: videoURL,
          }}
          style={fullscreen ? styles.fullscreenVideo : styles.video}
          controls={false}
          resizeMode={'contain'}
          onLoad={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
          paused={!play}
          muted={true}
        />

        {showControl && (
          <View style={styles.controlOverlay}>
            <TouchableOpacity
              onPress={handleFullscreen}
              hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
              style={styles.fullscreenButton}>
              {fullscreen ? (
                <MaterialCommunityIcons
                  size={24}
                  color={Colors.PrimaryIconColor}
                  name="fullscreen-exit"
                />
              ) : (
                <MaterialCommunityIcons
                  size={24}
                  color={Colors.PrimaryIconColor}
                  name="fullscreen"
                />
              )}
            </TouchableOpacity>

            <VideoPlayerControls
              onPlay={handlePlay}
              onPause={handlePlayPause}
              playing={play}
              skipBackwards={skipBackward}
              skipForwards={skipForward}
            />

            <ProgressBar
              currentTime={currentTime}
              duration={duration > 0 ? duration : 0}
              onSlideStart={handlePlayPause}
              onSlideComplete={handlePlayPause}
              onSlideCapture={onSeek}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    height: 300,
    width: '100%',
  },
  container: {
    backgroundColor: Colors.PrimaryBG,
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: Colors.PrimaryBG,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  video: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: Colors.PrimaryBG,
  },
  fullscreenVideo: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: Colors.PrimaryBG,
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenButton: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
  },
  controlOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.PrimaryBG,
    justifyContent: 'space-between',
  },
});
