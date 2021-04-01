import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export const OrderItem = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title='Details' onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
});
