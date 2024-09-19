import React, {useContext, useEffect} from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {retrieveToken} from '@/utils/helper';
import {DataContext} from '@/store/GlobalState';
import {ACTIONS} from '@/store/Actions';
import Container from '@/components/Container';
import { ActivityIndicator } from 'react-native';

export const MainNavigation = () => {
  const [loading, setLoading] = React.useState(true);
  const {state, dispatch} = useContext(DataContext);

  // This is just a random example
  useEffect(() => {
    const restoreToken = async () => {
      const token = await retrieveToken('token');
      dispatch({type: ACTIONS.TOKEN, payload: token});
      setLoading(false);
    };

    restoreToken();
  }, []);


  if (loading)
    return (
      <Container>
        <ActivityIndicator />
      </Container>
    );

  return state?.token ? <MainStack /> : <AuthStack />;
};

