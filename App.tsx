import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {MainNavigation} from '@/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {DataProvider} from '@/store/GlobalState';
import SplashScreen from 'react-native-splash-screen';
import {LogBox} from 'react-native';


LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  //
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <DataProvider>
          <MainNavigation />
        </DataProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
