import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Log in"
        onPress={() => navigation.navigate('OrderList')}
      />
    </View>
  );
}

function OrderListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Order List Screen</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login" component={LoginScreen}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderList" component={OrderListScreen}
          options={{
            gestureEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details" component={DetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
