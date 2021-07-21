import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
const Tab=createBottomTabNavigator();
import reminder from './Screens/Reminders'
import setup from './Screens/Setup'
import TabNavigator from './TabNavigator';
// or any pure javascript modules available in np
import * as firebase from 'firebase';
import {firebaseConfig} from './config';


export default function App() {
  return (
   <NavigationContainer>
   <TabNavigator/>
   </NavigationContainer>
  );
}
