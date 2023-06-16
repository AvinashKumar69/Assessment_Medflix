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
import {PaperProvider} from 'react-native-paper';

import RootNavigation from './src/navigation/RootNavigation';
import {ReplayContextProvider} from './src/services/ReplayContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <ReplayContextProvider>
      <NavigationContainer>
        <PaperProvider>
          <RootNavigation />
        </PaperProvider>
      </NavigationContainer>
    </ReplayContextProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
