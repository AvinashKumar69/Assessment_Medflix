import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../assets/colors/Colors';
import Replay from '../screens/ReplayScreens/Replay';
import VideoPlayer from '../screens/ReplayScreens/VideoPlayer';

export default ReplayStack = () => {
  const ReplayStack = createNativeStackNavigator();

  const headerLeft = props => (
    <Image
      source={require('../assets/images/medflixLogo.png')}
      alt="Medflix Logo"
      style={styles.medflixLogoImage}
      resizeMethod="resize"
    />
  );

  const headerRight = props => (
    <View style={styles.headerRight_container}>
      <Ionicons size={24} color={Colors.PrimaryIconColor} name="search" />
      <MaterialCommunityIcons
        size={24}
        color={Colors.PrimaryIconColor}
        name="bell-outline"
      />
      <Avatar.Text size={40} label="AK" style={styles.headerRight_avatar} />
    </View>
  );

  const styleObject__screenOptions = {
    animation: 'slide_from_bottom',
    headerStyle: {backgroundColor: Colors.SecondaryBG},
    headerTitleStyle: {color: Colors.PrimaryTextColor},
    headerTintColor: Colors.PrimaryAppColor,
    statusBarHidden: true,
  };

  const styleObject__replayScreen_options = {
    headerShown: true,
    headerStyle: {backgroundColor: Colors.PrimaryBG},
    headerLeft: headerLeft,
    headerRight: headerRight,
    headerTitle: props => null,
  };

  return (
    <ReplayStack.Navigator
      screenOptions={styleObject__screenOptions}
      initialRouteName="ReplayScreen">
      <ReplayStack.Screen
        name="ReplayScreen"
        component={Replay}
        options={styleObject__replayScreen_options}
      />
      <ReplayStack.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={({route}) => ({title: route.params.name})}
      />
    </ReplayStack.Navigator>
  );
};

const styles = StyleSheet.create({
  medflixLogoImage: {
    height: 40,
    width: 40,
    borderRadius: 9999,
  },
  headerRight_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  headerRight_avatar: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: Colors.SecondaryAppColor,
  },
});
