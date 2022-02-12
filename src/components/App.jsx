import React, { useState } from 'react'
import todoData from '../todoData'
import TaskListInput from './AppTask/TaskListInput'
import theme from './AppTheme'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import TaskListItem from './AppTask/TaskListItem'
import { Box, Button, Tooltip } from '@mui/material'
import Layout from './AppLayout/TheLayout'
export default function App() {
  // TODO
  // useLocalStorage hook
  // validate edge cases like if app were to be deployed in a server context
  
  const localStorageIfany = JSON.parse(localStorage.getItem('todoData'))
  // check if any valid local storage for data persistent
  // initialized with todoData (json) instead [made for initial render/example]
  const initialized = localStorageIfany ? localStorageIfany : todoData

  const [todos, setTodos] = useState(initialized)
  const { length: NumberOfTodos } = todos

  const [noEmpty, setNoEmpty] = useState(null)

  const handleChange = (id) => {
    let updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : { ...item }
    )
    localStorage.setItem('todoData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('todoData'))
    setTodos(updatedTodos)
    //
  }
  const addTodo = (userData) => {
    //  TODO
    // validate userInput useing Regex
    if (userData === '' || userData === ' ')
      return setNoEmpty('Add a valuable task!')
    setNoEmpty(null)

    //
    let todoData = [...todos]
    // TODO
    // use lib for handling unique IDs
    let randomId = Date.now()
    let newData = { id: randomId, text: userData, completed: false }
    let newTodo = [...todoData, newData]
    //
    localStorage.setItem('todoData', JSON.stringify(newTodo))
    newTodo = JSON.parse(localStorage.getItem('todoData'))
    //
    setTodos(newTodo)
  }

  const handleFilter = () => {
    let filteredCompleted = () => todos.filter((i) => !i.completed)
    localStorage.setItem('todoData', JSON.stringify(filteredCompleted()))
    let filteredCompletedd = JSON.parse(localStorage.getItem('todoData'))
    setTodos(filteredCompletedd)
  }
  const handleDelete = (id) => {
    let updatedTodos = todos.filter((item) => item.id !== id)
    localStorage.setItem('todoData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('todoData'))
    setTodos(updatedTodos)
  }


// indiviual todo tasks
  const todoItems = todos?.map((item) => (
    <TaskListItem
      task={item}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  ))
  const appTheme = createTheme(theme)

  return (
    <ThemeProvider theme={appTheme}>
      <Layout count={NumberOfTodos}>
        <TaskListInput noEmpty={noEmpty}  addTodo={addTodo} />
        <Box sx={{ maxHeight: '30rem',  }}>{todoItems}</Box>
        <Tooltip disableFocusListener disableTouchListener title="Your checked tasks will be deleted when you press this button!">

        <Button
          variant="contained"
          disabled={NumberOfTodos === 0 ? true : false}
          sx={{ m: { xs: 4, sm: 4 }, mr: { xs: 0.3, }, float: 'right' }}
          onClick={handleFilter}
          >
          Clear accomplished!
        </Button>
          </Tooltip>
      </Layout>
    </ThemeProvider>
  )
}
