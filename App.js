import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import homeScreen from './component/homeScreen';
import skillScreen from './component/skillScreen';
import contactScreen from './component/contactScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={homeScreen} />
        <Tab.Screen name="skills" component={skillScreen} />
        <Tab.Screen name="contact" component={contactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
