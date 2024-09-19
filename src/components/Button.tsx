import {colors} from '@/assets/colors';
import React from 'react';
import {ActivityIndicator, Pressable, StyleSheet} from 'react-native';
import BodyText from './Bodytext';

interface Props {
  title: string;
  width?: any;
  style?: any;
  handlePress?: any;
  disabled?: boolean;
  loading?: boolean; 
}

const Button = (props: Props) => {
  //
  return (
    <>
      {props?.disabled ? (
        <Pressable style={[styles.disabledContainer, props.style]}>
          <BodyText style={styles.disabledText}>{props.title}</BodyText>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.container, props.style]}
          onPress={props.handlePress}>
          {props.loading ? (
            <ActivityIndicator />
          ) : (
            <BodyText style={styles.text}>{props.title}</BodyText>
          )}
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  disabledContainer: {
    backgroundColor: colors.lightcolor,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
  },
  container: {
    backgroundColor: colors.black,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 5,
  },
  disabledText: {
    color: colors.black,
  },
  text: {
    color: colors.white,
  },
});

export default Button;
