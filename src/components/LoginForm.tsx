// src/components/LoginForm.tsx

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername} // Actualiza el estado de username
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry // Hace que el texto se muestre como contraseña
        value={password}
        onChangeText={setPassword} // Actualiza el estado de password
      />

      <Button 
        title="Iniciar sesión"
        onPress={() => {} /* No hará nada aún */}
      />

      <Text style={styles.footer}>¿No tienes cuenta? Regístrate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    color: 'gray',
  },
});

export default LoginForm;
