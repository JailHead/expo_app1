import React,{ useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, modal, Modal } from 'react-native';
import Form from './src/components/Form';

export default function App() {
  //LOS HOOKS SE COLOCAN EN LA PARTE SUPERIOR
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{''}
      </Text>
      <Text style={styles.tituloBold}>Consultas</Text>        
      <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>
      <Form modalVisible = {modalVisible}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
    flexDirection: 'column',    
    marginTop: 80,
  },
  titulo:{
    textAlign: 'center',
    color: '#374151',
    fontSize: 30,
    fontWeight: '700',
  },
  tituloBold:{
    fontWeight: '200',
    fontSize: 25,
    textAlign: 'center',
    color: '#6D28D9'
  },
  btnNuevaCita:{
    backgroundColor:'#6d28d9',
    padding:20,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10,
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#fff',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase',
  },
});