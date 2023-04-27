import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

const TaskItem = ({ item, onSelectTask }) => {
  return (
    <TouchableOpacity 
      style={item.finished ? styles.containerFinish : styles.container } 
      onPress={() => onSelectTask(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  )
}

export default TaskItem