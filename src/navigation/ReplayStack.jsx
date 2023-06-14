import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Replay from '../screens/ReplayScreens/Replay';
import VideoPlayer from '../screens/ReplayScreens/VideoPlayer';

export default ReplayStack = () => {
  const ReplayStack = createNativeStackNavigator();

  return (
    <ReplayStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
      initialRouteName="ReplayScreen">
      <ReplayStack.Screen name="ReplayScreen" component={Replay} />
      <ReplayStack.Screen name="VideoPlayer" component={VideoPlayer} />
    </ReplayStack.Navigator>
  );
};
