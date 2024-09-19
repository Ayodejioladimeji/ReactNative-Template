import React from 'react';
import { Platform, StyleSheet, View} from 'react-native';
import Button from './Button';
import {height, width} from '@/utils/dimentions';


interface Props {
  orders?: any;
  totalcount?: number;
  onPress?: any;
  loading?: boolean;
}

const LoadMore = (props: Props) => {
  return (
    <View>
      {props.orders?.length < 10 || props.orders?.length >= props.totalcount ? (
        <View style={styles.btn}></View>
      ) : (
        <Button
          handlePress={props.onPress}
          title="View more"
          style={styles.btn}
          loading={props.loading ? true : false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: Platform.OS === 'ios' ? height * 0.6 : height * 0.6,
    marginTop: 40,
    width: width * 0.5,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default LoadMore;
