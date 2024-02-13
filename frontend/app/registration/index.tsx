import React, { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
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
    <View>
      <Text>Логин:</Text>
      <TextInput
        value={login}
        onChangeText={setLogin}
        placeholder="Enter your login"
      />

      <Text>Пароль:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text>Никнейм:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Button value="Зарегистрироваться" onPress={handleSubmit} />
    </View>
  );
};

export default Registration;