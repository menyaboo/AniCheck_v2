import React, { useState } from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Text, TextInput} from "../../../styles/global";
import {Button} from "../../Button";
import {useRegisterUserMutation} from "../../../services/authApi";

const RegistrationForm = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registerUser, { isLoading, isError }] = useRegisterUserMutation();

  const handleSubmit = async () => {
    if (!login || !password || !name) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      const response = await registerUser({ login, password, name }).unwrap();
      Alert.alert('Success', 'Registration successful');
    } catch (error) {
      Alert.alert('Error', 'Registration failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Логин:</Text>
      <TextInput
        style={styles.input}
        value={login}
        onChangeText={setLogin}
        placeholder="Enter your login"
      />

      <Text style={styles.label}>Пароль:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Text style={styles.label}>Никнейм:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Button value="Зарегистрироваться" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginTop: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    paddingHorizontal: 8,
  },
});

export default RegistrationForm;