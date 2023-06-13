/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';

import RootNavigation from './src/navigation/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <PaperProvider> */}
      <RootNavigation />
      {/* </PaperProvider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
