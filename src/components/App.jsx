import React, {useState} from 'react'
import TodoItem from './TodoItem'
import todoData from './todoData'
import TodoInput from './TodoInput'
import Header from './Header'

export default function App() {
  let localStorageIfany = JSON.parse(localStorage.getItem('todoData'))
  // check if any valid local storage for data persistent
  // initialized with todoData (json) instead [made for initial render/example]
  let initialized = localStorageIfany ? localStorageIfany : todoData

  const [todos, setTodos] = useState(initialized)
  const {length: NumberOfTodos} = todos

  const handleChange = id => {
    let updatedTodos = todos.map( item => item.id === id ? { ...item, completed: !item.completed } : { ...item })
    localStorage.setItem('todoData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('todoData'))
    setTodos(updatedTodos)
    console.log('changed:::', id)
  }
  const addTodo = (userData) => {
    // console.log('user input:::', userData)
    let todoData = [...todos]
    
    let newData = {id: NumberOfTodos + 1,  text: userData, completed: false}
    let newTodo = [...todoData, newData]
    // console.log(todos)
    localStorage.setItem('todoData', JSON.stringify(newTodo))
    newTodo = JSON.parse(localStorage.getItem('todoData'))
    // console.log('local storage:::', localStorage.getItem('todoData'))
    setTodos(newTodo)
  }

  const handleFilter = () => {
    let filteredCompleted = () => todos.filter(i => !i.completed)
    console.log('fil', filteredCompleted())
    localStorage.setItem('todoData', JSON.stringify(filteredCompleted()))
    let filteredCompletedd = JSON.parse(localStorage.getItem('todoData'))
    console.log(filteredCompletedd)
    setTodos(filteredCompletedd);
  }
  const handleDelete = id => {
    let updatedTodos = todos.filter(item => item.id !== id)
    localStorage.setItem('todoData', JSON.stringify(updatedTodos))
    updatedTodos = JSON.parse(localStorage.getItem('todoData'))
    setTodos(updatedTodos)
  }

  const todoItems = todos.map((item =>
      <TodoItem key={item.id} item={item} handleChange={handleChange} handleDelete={handleDelete} />
 ))
  // console.log('items',todoItems)
  return (
    <div>
      <Header count={NumberOfTodos}/>
      <TodoInput items={todos} addTodo={addTodo}/> 
      {todoItems}
      <button style={{marginTop: '1rem'}} onClick={handleFilter}>Clear accomplished!</button>

    </div>
  )
}