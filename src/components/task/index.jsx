import React from "react"
import { FlatList } from 'react-native'

import TaskItem  from './item'


const Tasks = ({ taskList, onSelectItem }) => {

  const renderItem = ({ item }) => {
    return (    
      <TaskItem   
        item={item}
        onSelectTask={onSelectItem}
      />
    )
  }

  console.log('Render list --> ', onSelectItem)


  const itemKey = (item) => item.id

  return (    
    <FlatList 
      renderItem={renderItem}
      data={taskList}
      keyExtractor={itemKey}
      alwaysBounceVertical={false}
    />
  )

}

export default Tasks