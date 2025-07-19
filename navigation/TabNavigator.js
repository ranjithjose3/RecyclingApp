import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // ✅ Import Icon

import CameraScreen from '../screens/CameraScreen';
import CalendarScreen from '../screens/CalendarScreen';
import RemindersScreen from '../screens/RemindersScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true, 
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Scan') iconName = 'camera';
            else if (route.name === 'Calendar') iconName = 'calendar';
            else if (route.name === 'Reminders') iconName = 'bell';

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Scan" component={CameraScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Reminders" component={RemindersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
