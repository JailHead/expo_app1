import React from 'react'
import { Modal, Text } from 'react-native'

function Form(props) {
  console.log(props)
  return (
    <Modal animationType='slide' visible={props.modalVisible}>
      <Text>Desde Modal</Text>      
    </Modal>
  )
}

export default Form