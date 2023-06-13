import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Login from '../screens/AuthScreens/Login';

export default AuthStack = () => {
  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}
      initialRouteName="Login">
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};
