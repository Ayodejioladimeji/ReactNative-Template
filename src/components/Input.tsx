import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import BodyText from './Bodytext';
import {colors} from '@/assets/colors';
import {s} from 'react-native-size-matters';

interface Props {
  label?: string;
  onChangeText: any;
  value: string;
  password?: boolean;
  placeholder?: string;
}

const Input = (props: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  //
  return (
    <View>
      {props?.label && <BodyText style={styles.text}>{props.label}</BodyText>}

      <TextInput
        maxLength={40}
        onChangeText={text => props?.onChangeText(text)}
        value={props.value}
        style={[styles.input, isFocused && styles.focusedInput]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize="none"
        secureTextEntry={props.password ? true : false}
        placeholder={props.placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 8,
    color: colors.lightcolor,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: colors.lightcolor,
    fontSize: s(12),
    color: colors.black,
  },
  focusedInput: {
    borderColor: colors.primarycolor,
  },
});

export default Input;
