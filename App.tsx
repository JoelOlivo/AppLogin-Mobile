// App.tsx

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginForm from './src/components/LoginForm';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
