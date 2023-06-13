import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FeedStack from './FeedStack';
import HomeStack from './HomeStack';
import MyActivityStack from './MyActivityStack';
import ReplayStack from './ReplayStack';
import UpcomingStack from './UpcomingStack';

const MainStack = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000',
          height: 60,
          paddingBottom: 5,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home')
            iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Feed')
            iconName = focused ? 'wechat' : 'wechat';
          else if (route.name === 'Upcoming')
            iconName = focused ? 'calendar-text' : 'calendar-text-outline';
          else if (route.name === 'Replay')
            iconName = focused ? 'video' : 'video-outline';
          else if (route.name === 'My activity')
            iconName = focused ? 'play-box-multiple' : 'play-box-multiple-outline';

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#e6c757',
        tabBarInactiveTintColor: '#eaeaea',
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
      })}
      detachInactiveScreens={true}
      initialRouteName="ReplayStack"
      backBehavior="history">
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="Upcoming" component={UpcomingStack} />
      <Tab.Screen name="Replay" component={ReplayStack} />
      <Tab.Screen name="My activity" component={MyActivityStack} />
    </Tab.Navigator>
  );
};

export default MainStack;
