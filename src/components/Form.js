import React from 'react'
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'

function Form(props) {
  const {modalVisible} = props;
  return (
    <Modal animationType='slide' visible={props.modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <Text style={styles.titulo}>
          Nueva {' '}
          <Text style={styles.tituloBold}>Cita</Text>
        </Text>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Paciente</Text>
          <TextInput style={styles.input} keyboardType='' placeholder='Nombre del paciente' placeholderTextColor={'#666'}/>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre Propietario</Text>
          <TextInput style={styles.input} keyboardType='' placeholder='Nombre del paciente' placeholderTextColor={'#666'}/>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} keyboardType='email-address' placeholder='Nombre del paciente' placeholderTextColor={'#666'}/>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Telefono</Text>
          <TextInput style={styles.input} keyboardType='phone-pad' placeholder='Nombre del paciente' placeholderTextColor={'#666'}/>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Fecha</Text>
          <TextInput style={styles.input} keyboardType='phone-pad' placeholder='Nombre del paciente' placeholderTextColor={'#666'}/>
        </View>
        <View style={styles.campo}>
          <Text style={styles.label}>Sintomas</Text>
          <TextInput style={styles.input} keyboardType='' placeholder='Nombre del paciente' placeholderTextColor={'#666'}/>
        </View>
      </SafeAreaView>
    </Modal>
  )
}
const styles = StyleSheet.create({
  contenido:{
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo:{
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: '#fff',
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo:{
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 100,
    color: '#000',
  },
  label:{
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input:{
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
  },
})

export default Form