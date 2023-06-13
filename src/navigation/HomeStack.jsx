import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Home from '../screens/HomeScreens/Home';

export default HomeStack = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'default',
      }}
      initialRouteName="HomeScreen">
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
};
