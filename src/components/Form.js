import React, {useState} from 'react';
import { Modal, Text, SafeAreaView, StyleSheet, TextInput, View, ScrollView, Pressable, Alert } from 'react-native';
import DatePicker from '@dietime/react-native-date-picker';

function Form({modalVisible, setModalVisible, pacientes, setPacientes}) {
  const {paciente, setPaciente} = useState('')
  const {propietario, setPropietario} = useState('')
  const {email, setEmail} = useState('')
  const {telefono, setTelefono} = useState('')  
  const {sintomas, setSintomas} = useState('')
  const [date, setDate] = useState(new Date())
  const handleCita = () => {
    //Validar
    if([paciente, propietario, email, date, sintomas].includes('')){
      // console.log('Hay errores');
      Alert.alert('Advetancia', 'Hay errores', [{text:'No es nada'}]);
      return
    }
    // console.log('Paciente agregado');
    const nuevoPaciente = {
      paciente,
      propietario,
      email,
      telefono,
      sintomas,
      date,
    }
    setPacientes([...pacientes, nuevoPaciente])
    setModalVisible(!modalVisible)
    
    setPropietario('')
    setEmail('')
    setTelefono('')
    setDate(new Date())
    setSintomas('')
  }

  return (
    <Modal animationType='slide' visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <View style={styles.campo}>
            <Text style={styles.titulo}>
              Nueva {' '}
              <Text style={styles.tituloBold}>Cita</Text>
            </Text>
          </View>
          <Pressable style={styles.btnVolver}>
            <Text style={styles.btnText} onPress={() => setModalVisible(!modalVisible)}>Volver</Text>
          </Pressable>
          <View style={styles.primerCampo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput style={styles.input} keyboardType='' placeholder='Nombre del paciente' placeholderTextColor={'#666'} value={paciente} onChangeText={setPaciente}/>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput style={styles.input} keyboardType='' placeholder='Nombre Propietario' placeholderTextColor={'#666'} value={propietario} onChangeText={setPropietario}/>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} keyboardType='email-address' placeholder='example@email.com' placeholderTextColor={'#666'} value={email} onChangeText={setEmail}/>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Telefono</Text>
            <TextInput style={styles.input} keyboardType='number-pad' placeholder='Nombre del paciente' placeholderTextColor={'#666'} value={telefono} onChangeText={setTelefono}/>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha</Text>
            <Text style={styles.label}>{date ? date.toDateString() : "Select date..."}</Text>
          </View>
          <View style={styles.datePicker}>
            <DatePicker style={styles.datePicker}
                value={date}
                onChange={(value) => setDate(value)}
                format="yyyy-mm-dd"
                locale='es'
                mode='date'
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput style={[styles.input, styles.sintomasInput]} keyboardType='' placeholder='Nombre del paciente' placeholderTextColor={'#666'} multiline={true} numberOfLines={3} value={sintomas} onChangeText={setSintomas}/>
          </View>          
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar cita</Text>
          </Pressable>
        </ScrollView>
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
  primerCampo:{
    marginTop: 40,
    marginHorizontal: 30,
    marginBottom: 15,
    color: '#000',
  },
  campo:{    
    marginHorizontal: 30,
    marginBottom: 15,
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
  sintomasInput: {
    height: 100,
  },
  btnVolver: {
    backgroundColor:'#fff',
    padding:20,
    marginTop:20,
    marginHorizontal:30,
    marginBottom: 40,
    borderRadius:10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color:'#6d28d9',
  },
  datePicker: {
    backgroundColor: '#fff',
    marginHorizontal: 30,
    marginBottom: 15,    
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,    
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: '700'
  },
})

export default Form