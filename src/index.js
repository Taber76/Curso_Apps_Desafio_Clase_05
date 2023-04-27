import { useState } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

import { Input, ModalComp, Tasks } from './components/index'

export default function App() {

  const [taskText, setTaskText] = useState('')
  const [taskList, setTaskList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedElement, setSelectedElement] = useState(null)

  const onAddTask = () => {
    if (taskText.length === 0) return
    setTaskList([
      ...taskList,
      {
        id: Math.random().toString(),
        value: taskText,
        finished: false
      }
    ])
    setTaskText('')
  }

  const onHandleTask = (id) => {
    setModalVisible(!modalVisible)
    const selectedTask = taskList.find(task => task.id === id)
    setSelectedElement(selectedTask)
  }

  const onHandelCompletedModal = (id) => {
    let auxList = taskList.filter(task => task.id != id)
    auxList.push({    
      id: Math.random().toString(),// id,
      value: selectedElement.value,
      finished: !selectedElement.finished
    })
    setTaskList(auxList)
    setModalVisible(!modalVisible)
  }

  const onHandleCancelModal = () => {
    setModalVisible(!modalVisible)
    setSelectedElement(null)
  }

  const onHandleDeleteModal = (id) => {
    setTaskList(taskList.filter(task => task.id != id))
    setModalVisible(!modalVisible)
    setSelectedElement(null)
  }


  return (
    <View style={styles.container}>
      
      <Input
        placeholder='Enter your task'
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        buttonColor='#52528C'
        buttonTitle='Add'
        onHandlerButton={onAddTask}
      />

      <Tasks
        taskList={taskList}
        onSelectItem={onHandleTask}
      />

      <ModalComp
        modalVisible={modalVisible}
        modalTitle='Task edition'
        modalMessage='Edit your task'
        selectedElement={selectedElement?.value}
        btn1title='Completed'
        btn1Color='#52528C'
        onHandleBtn1={() => onHandelCompletedModal(selectedElement.id)}
        btn2title='Cancel'
        btn2Color='#52528C'
        onHandleBtn2={onHandleCancelModal}
        btn3title='Delete'
        btn3Color='#52528C'
        onHandleBtn3={() => onHandleDeleteModal(selectedElement.id)}
      />

    </View>
  )
}