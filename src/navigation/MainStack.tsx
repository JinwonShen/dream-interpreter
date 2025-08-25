import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StatsScreen from '../screens/StatsScreen';
import WriteScreen from '../screens/WriteScreen';
import { MainStackParamList } from '../types/navigation';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#1a1a1a' },
      }}
    >
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="Write" component={WriteScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Stats" component={StatsScreen} />
    </Stack.Navigator>
  );
}
