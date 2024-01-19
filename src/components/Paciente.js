import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const Paciente = ({item}) => {
    const {paciente, fecha}=item;
    const formatearFecha = fecha => {
        const nuevaFecha = new Date(fecha)
        const opciones={
            weekday:'long',
            year:'numeric',
            month:'long',
            day:'numeric'
        }
        return nuevaFecha.toLocaleDateString('es-ES', opciones)
    }
    
    return(
        <View style={styles.contenedor}>
            <Text style={styles.text}>
                {paciente}
            </Text>
            <Text style={styles.fecha}>
                {formatearFecha(fecha)}
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: '#fff',
        paddingVertical: 20,
    },
    label:{
        color: '#374151',
        textTransform: 'capitalize',
        fontWeight: '700',
        marginBottom: 10,
    },
    texto:{
        color: '#6D28D9',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    fecha:{
        color: '#374151',        
    },
})

export default Paciente