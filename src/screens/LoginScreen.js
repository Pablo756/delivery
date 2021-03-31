import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Keyboard } from 'react-native';
import {DismissKeyboardHOC} from '../components/DismissKeyboardHOC';
import clients from '../constants/clients';
import {windowWidth} from '../utils/Dimensions';

const DismissableView = DismissKeyboardHOC(View);

export const LoginScreen = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const check = () => {
    Keyboard.dismiss();
    clients.some((client) => client.login === login && client.password === password)
      ? navigation.navigate(
      'OrderList',
      {id: clients[clients.findIndex((client) => client.login === login)].id}
      )
      : setError('Неверный логин/пароль!')
  };

  return (
    <DismissableView style={styles.container}>
      <Text style={styles.title}>Добро пожаловать!</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          onFocus={() => setError('')}
          returnKeyType="done"
          autoCapitalize="none"
          autoCorrect={false}
          multiline={false}
          style={styles.textInput}
          placeholder="Логин"
          placeholderTextColor="#000"
          onChangeText={(login) => {setLogin(login); setError('')}}
          blurOnSubmit={true}
        />
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          onFocus={() => setError('')}
          returnKeyType="done"
          autoCapitalize="none"
          multiline={false}
          autoCorrect={false}
          style={styles.textInput}
          placeholder="Пароль"
          placeholderTextColor="#000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
          blurOnSubmit={true}
        />
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
      <TouchableOpacity onPress={check} style={styles.button}>
        <Text style={styles.buttonTitle}>ВОЙТИ</Text>
      </TouchableOpacity>
    </DismissableView>
  );
};


const styles = StyleSheet.create({
  errorContainer: {
    height: 0.1 * windowWidth,
  },
  errorText: {
    color: '#a5011d',
    fontSize: 0.05 * windowWidth,
  },
  title: {
    color: '#000',
    fontSize: 0.07 * windowWidth,
    fontWeight: 'bold',
    marginBottom: 0.12 * windowWidth,
  },
  button: {
    alignItems: 'center',
    borderRadius: 0.015 * windowWidth,
    justifyContent: 'center',
    backgroundColor: '#0064ad',
    width: 0.9 * windowWidth,
    height: 0.17 * windowWidth,
    marginTop: 0.05 * windowWidth,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 0.048 * windowWidth,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    fontSize: 0.054 * windowWidth,
    paddingHorizontal: 0.03 * windowWidth,
    width: 0.89 * windowWidth,
    height: 0.14 * windowWidth,
  },
  textInputContainer: {
    height: 0.15 * windowWidth,
    width: 0.9 * windowWidth,
    borderColor: '#0064ad',
    borderWidth: 2,
    borderRadius: 0.02 * windowWidth,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: 0.03 * windowWidth,
  }
});
