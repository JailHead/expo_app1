import React,{ useState } from 'react';
import { StyleSheet,
   Text,
   View, 
   SafeAreaView, 
   Pressable, 
   Modal,
   FlatList
} from 'react-native';
import Form from './src/components/Form';
import Paciente from './src/components/Paciente';

export default function App() {
  //LOS HOOKS SE COLOCAN EN LA PARTE SUPERIOR
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{''}
      </Text>
      <Text style={styles.tituloBold}>Consultas</Text>        
      <Pressable style={styles.btnNuevaCita} onPress={() => setModalVisible(true)}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ?
        <Text style={styles.noPacientes}>No hay pacientes aún</Text>:
        <View>          
          <FlatList
            style={styles.listado}
            data={pacientes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return(
                <Paciente
                  item={item}
                  setModalVisible={setModalVisible}
                  pacienteEditar={pacienteEditar}
                />
              )
            }}
            />
        </View>
      }

      <Form 
        modalVisible = {modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
      />
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
  noPacientes:{
    textAlign:'center',
    marginTop: 45,
    fontSize: 24,
    fontWeight: '700',
  },
  listado:{
    marginTop: 50,
    marginHorizontal: 30,    
  }  
});