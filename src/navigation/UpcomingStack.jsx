import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Upcoming from '../screens/UpcomingScreens/Upcoming';

export default UpcomingStack = () => {
  const UpcomingStack = createNativeStackNavigator();

  return (
    <UpcomingStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
      initialRouteName="UpcomingScreen">
      <UpcomingStack.Screen name="UpcomingScreen" component={Upcoming} />
    </UpcomingStack.Navigator>
  );
};
