import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Feed from '../screens/FeedScreens/Feed';

export default FeedStack = () => {
  const FeedStack = createNativeStackNavigator();

  return (
    <FeedStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
      initialRouteName="FeedScreen">
      <FeedStack.Screen name="FeedScreen" component={Feed} />
    </FeedStack.Navigator>
  );
};
