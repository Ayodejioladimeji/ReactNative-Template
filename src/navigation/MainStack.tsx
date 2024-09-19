import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '@/screens/main/Dashboard';
const Stack = createNativeStackNavigator();

const MainStack = () => {

  //
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureDirection: 'horizontal',
          animation: 'slide_from_right',
        }}>
        {/* dashboard */}
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
      </Stack.Navigator>
    </>
  );
};
export default MainStack;
