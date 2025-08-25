import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { RootStackParamList } from '../types/navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  // TODO: 실제 인증 상태 관리로 변경
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : (
          <Stack.Screen name="Main" component={MainStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
