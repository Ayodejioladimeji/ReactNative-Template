import React, {useContext, useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '@/assets/colors';
import {DataContext} from '@/store/GlobalState';
import BodyText from './Bodytext';
import {ACTIONS} from '@/store/Actions';

interface Props {
  children: any;
  showNav?: boolean;
  title?: string;
  item?: any;
  ellipsis?: boolean;
}

const Container = (props: Props) => {
  const {state, dispatch} = useContext(DataContext);

  useEffect(() => {
    if (state?.success) {
      setTimeout(() => {
        dispatch({type: ACTIONS.SUCCESS, payload: null});
      }, 3000);
    }

    if (state?.error) {
      setTimeout(() => {
        dispatch({type: ACTIONS.ERROR, payload: null});
      }, 3000);
    }
  }, [state.error, state.success]);

  //

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <StatusBar
        barStyle={
          state?.error || state?.success ? 'light-content' : 'dark-content'
        }
        backgroundColor={
          state?.error ? 'red' : state?.success ? 'green' : '#fff'
        }
      />

      {state?.error && (
        <View style={[styles.error]}>
          <BodyText style={{color: colors.white}}>{state?.error}</BodyText>
        </View>
      )}

      {state?.success && (
        <View style={[styles.success]}>
          <BodyText style={{color: colors.white}}>{state?.success}</BodyText>
        </View>
      )}

      <View
        style={{
          backgroundColor: colors.white,
        }}>
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    paddingTop: Platform.OS === 'ios' ? 60 : 10,
    paddingBottom: 20,
  },
  success: {
    backgroundColor: 'green',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    paddingTop: Platform.OS === 'ios' ? 60 : 10,
    paddingBottom: 20,
  },
});

export default Container;
