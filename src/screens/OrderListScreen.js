import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const OrderListScreen = ({ navigation, route }) => {
  const id = route.params.id;
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
