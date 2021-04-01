import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export const DetailsScreen = ({ navigation, route }) => {
  const deliveries = route.params.deliveries.length;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>{deliveries}</Text>
      <Button
        title="go back"
        onPress={() => navigation.goBack()}
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
