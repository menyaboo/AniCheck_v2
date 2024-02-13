import React, { useState } from 'react';
import {View, Image, Alert} from 'react-native';
import {RegistrationView, RegistrationInput} from './style';
import {Text, TextInput} from '../../src/styles/global';
import {Button} from "../../src/components/Button";
import {useRegisterUserMutation} from "../../src/services/authApi";

const Registration = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const handleSubmit = async () => {
    try {
      const response = await registerUser({ login, password, name }).unwrap();
      Alert.alert('Success', 'Registration successful');
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    }
  };

  return (
    <RegistrationView>
       <Image style={{width: 150, height: 150, borderRadius: 30}} source={require('../../assets/hi.jpg')} />
      
      <Text $size="h2">Регистрация</Text>

      <RegistrationInput
        value={name}
        onChangeText={setName}
        placeholder="Введите никнейм"
      />

      <RegistrationInput
        value={login}
        onChangeText={setLogin}
        placeholder="Введите логин"
      />

      <RegistrationInput
        value={password}
        onChangeText={setPassword}
        placeholder="Введите пароль"
        secureTextEntry={true}
      />

      <Button value="Зарегистрироваться" onPress={handleSubmit} />

     
    </RegistrationView>
  );
};

export default Registration;
