import React from 'react'
import ToDoItem from './components/ToDoItem'
import todoData from './components/todoData'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    
  }
  handleChange = id => {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
      } 
      return item
      })
      return {
        todos: updatedTodos
      }
    })
    
    console.log('changed', id)
  }
  render() {
    // console.log('todos', this.state.todos)
    const todoItems = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />)
    return (
      <div>
        {todoItems}
      </div>
    )
  }
}


  
//  handleChange = id => {

//  }