import React,{ useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{''}
        <Text style={styles.tituloBold}>Consultas</Text>        
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,

  },
  titulo:{
    textAlign: 'center',
    color: '#374151',
    fontSize: 30,
    fontWeight: '600'
  },
  tituloBold:{
    fontWeight: 200,
    color: '#6D28D9'
  },
});
