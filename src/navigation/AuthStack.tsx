import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@/screens/auth/Login';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  //
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name={'Login'} component={Login} />
    </Stack.Navigator>
  );
};
export default AuthStack;
