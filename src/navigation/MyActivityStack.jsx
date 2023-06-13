import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MyActivity from '../screens/MyActivityScreens/MyActivity';

export default MyActivityStack = () => {
  const MyActivityStack = createNativeStackNavigator();

  return (
    <MyActivityStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
      initialRouteName="MyActivity">
      <MyActivityStack.Screen name="MyActivity" component={MyActivity} />
    </MyActivityStack.Navigator>
  );
};
