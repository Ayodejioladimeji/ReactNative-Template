import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import { ACTIONS } from '@/store/Actions';
import { DataContext } from '@/store/GlobalState';
import { removeToken } from '@/utils/helper';
import React, { useContext } from 'react';
import {
  View,
} from 'react-native';

const Dashboard = () => {
  const {dispatch} = useContext(DataContext)

  // sample logout
  const logout = async() => {
   await removeToken("token")
    dispatch({ type: ACTIONS.TOKEN, payload: null });
  }

  //
  return (
    <Container>
      <View style={{paddingHorizontal: 15, marginTop:50}}>
        <Heading>Welcome to your dashboard</Heading>
        <Button title="Logout" style={{marginTop:30}} handlePress={logout}/>
      </View>
    </Container>
  );
};

export default Dashboard;
