import BodyText from '@/components/Bodytext';
import Button from '@/components/Button';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Input from '@/components/Input';
import {ACTIONS} from '@/store/Actions';
import {DataContext} from '@/store/GlobalState';
import {storeToken} from '@/utils/helper';
import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {dispatch} = useContext(DataContext);
  const [buttonloading, setButtonloading] = useState(false);

  //   handle submit - This is just a random example
  const handleSubmit = async () => {

    // to show the error state lets manually check for empty input
    if(email === "" || password ===""){
      return dispatch({ type: ACTIONS.ERROR, payload: "Please provide your login details" });
    }

    setButtonloading(true);

    await storeToken('token', "your-sample-token");
    dispatch({ type: ACTIONS.TOKEN, payload: "your-sample-token" });
    dispatch({ type: ACTIONS.SUCCESS, payload: "Login Successful" });

    setTimeout(() => {
      setButtonloading(false);
    }, 500)
  };

  //
  return (
    <Container>
      <View style={{paddingHorizontal: 15}}>
        <Heading style={styles.heading}>Welcome back!</Heading>

        <BodyText style={{marginBottom: 32}}>
          Please enter your credentials to access your account.
        </BodyText>

        <View style={styles.formBox}>
          <Input
            label="Company Email"
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="abc@email.com"
          />
        </View>

        <View style={styles.formBox}>
          <Input
            password
            label="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="********"
          />
        </View>

        <View style={styles.loginButton}>
          <Button
            title="Login"
            handlePress={handleSubmit}
            loading={buttonloading ? true : false}
          />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 40,
    marginBottom: 8,
  },
  formBox: {
    marginBottom: 20,
  },
  loginButton: {
    marginBottom: '5%',
  },
});

export default Login;
