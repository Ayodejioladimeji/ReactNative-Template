import {colors} from '@/assets/colors';
import FONTS from '@/contants/font';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {s} from 'react-native-size-matters';

interface Props {
  children: any;
  style?: any;
}

const Heading = (props: Props) => {
  return <Text style={[styles.text, props.style]}>{props?.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: s(20),
    fontFamily: FONTS.NOTOSANSBOLD,
    color: colors.black,
  },
});

export default Heading;
