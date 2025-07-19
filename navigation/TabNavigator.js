import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CameraScreen from '../screens/CameraScreen';
import CalendarScreen from '../screens/CalendarScreen';
import RemindersScreen from '../screens/RemindersScreen';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Scan" component={CameraScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Reminders" component={RemindersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
