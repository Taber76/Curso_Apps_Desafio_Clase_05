import React from "react"
import { Button, View, Modal, Text } from "react-native"
import { styles } from './styles'

const ModalComp = ({
    modalVisible,
    modalTitle,
    modalMessage,
    selectedElement,
    btn1title,
    btn1Color,
    onHandleBtn1,
    btn2title,
    btn2Color,
    onHandleBtn2,
    btn3title,
    btn3Color,
    onHandleBtn3
  }) => {
  return (
    <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>{modalTitle}</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>{modalMessage}</Text>
          <Text style={styles.modalDetailTask}>{selectedElement}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={btn1title}
            color={btn1Color}
            onPress={onHandleBtn1}
          />
          <Button
            title={btn2title}
            color={btn2Color}
            onPress={onHandleBtn2}
          />
          <Button
            title={btn3title}
            color={btn3Color}
            onPress={onHandleBtn3}
          />
        </View>
      </View>
    </Modal>
  )
}

export default ModalComp