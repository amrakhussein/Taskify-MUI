import { useState } from 'react'
import taskData from '../todoData'
import TaskListItem from './AppTask/TaskListItem'

import Layout from './AppLayout/TheLayout'
import TaskListCardAddNew from './AppTask/TaskListCardAddNew'
import { Box } from '@mantine/core'

export default function App() {
  // TODO
  // useLocalStorage hook
  // validate edge cases like if app were to be deployed in a server context

  const localStorageIfany = JSON.parse(localStorage.getItem('taskData'))
  // check if any valid local storage for data persistent
  // initialized with taskData (json) instead [made for initial render/example]
  const initialized = localStorageIfany ? localStorageIfany : taskData

  const [todos, setTodos] = useState(initialized)
  console.log('todos: ', todos);
  const { length: NumberOfTodos } = todos



  const handleToggleComplete = (id) => {
    let updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : { ...item }
    )
    localStorage.setItem('taskData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('taskData'))
    setTodos(updatedTodos)
    //
  }

  //   const { value } = text.target
  //   // 
  //   if (value === '' || value === ' ' || value === undefined) {
  //     setNoEmpty(true)
  //   } else {
  //     setNoEmpty(false)
  //   }
  // }

  const addTask = (title, body) => {
    console.log('title, body: ', title, body);
    

    let taskData = [...todos]
    console.log('taskData: ', taskData);
    // TODO
    // use lib for handling unique IDs
    let {id: lastId} = taskData[taskData.length - 1]
    let newId = lastId + 1 
    let newTask = { id: newId, title: title, content: body, completed: false, date: new Date() }
    let updatedTaskData = [ ...taskData, newTask]
    //
    localStorage.setItem('taskData', JSON.stringify(updatedTaskData))
    updatedTaskData = JSON.parse(localStorage.getItem('taskData'))
    //
    setTodos(updatedTaskData)
  }

  const handleFilter = () => {
    let filteredCompleted = () => todos.filter((i) => !i.completed)
    localStorage.setItem('taskData', JSON.stringify(filteredCompleted()))
    let filteredCompletedd = JSON.parse(localStorage.getItem('taskData'))
    setTodos(filteredCompletedd)
  }
  const handleDelete = (id) => {
    let updatedTodos = todos.filter((item) => item.id !== id)
    localStorage.setItem('taskData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('taskData'))
    setTodos(updatedTodos)
  }

  // indiviual todo tasks
  const todoItems = todos?.map((item) => (
    <TaskListItem
      task={item}
      handleToggle={handleToggleComplete}
      handleDelete={handleDelete}
    />
  ))

  return (
    <>
    
      <Layout count={NumberOfTodos} >
        <TaskListCardAddNew
      
          addTask={addTask}
        />
        <Box sx={{  }}>{todoItems}</Box>

        </Layout>

      <Box >
          <button
            disabled={NumberOfTodos === 0 ? true : false}
            sx={{
              
              p: { xs: 2, sm: 4 },
              position: 'fixed',
              width: {xs:'20rem',sm:'20rem'},
              height: {xs:'2.4rem', sm:'0.8rem'},
              bottom: 8,
              right: 20,
              textTransform: 'uppercase',
              fontSize: '1.2rem',
            }}
            onClick={handleFilter}
            >
            Clear accomplished!
          </button>
            </Box>
            </>
  )
}


// Your checked tasks will be deleted when you press this button!