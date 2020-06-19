import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './component/HomeScreen';
import SkillScreen from './component/SkillScreen';
import ContactScreen from './component/ContactScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="skills" component={SkillScreen} />
        <Tab.Screen name="contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
