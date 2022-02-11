import React, { useState } from 'react';
import todoData from '../todoData';
import TheHeader from './AppLayout/TheHeader';
import Loading from './AppLoading';
import TaskListInput from './AppTask/TaskListInput';
import theme from './AppTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TaskListItem from './AppTask/TaskListItem';
import { Button, Container } from '@mui/material';
import Layout from './AppLayout/TheLayout';
export default function App() {
  const localStorageIfany = JSON.parse(localStorage.getItem('todoData'));
  // check if any valid local storage for data persistent
  // initialized with todoData (json) instead [made for initial render/example]
  const initialized = localStorageIfany ? localStorageIfany : todoData;

  const [todos, setTodos] = useState(initialized);
  const { length: NumberOfTodos } = todos;

  const [noEmpty, setNoEmpty] = useState(null);

  const handleChange = (id) => {
    let updatedTodos = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : { ...item }
    );
    localStorage.setItem('todoData', JSON.stringify(updatedTodos));
    updatedTodos = JSON.parse(localStorage.getItem('todoData'));
    setTodos(updatedTodos);
    console.log('changed:::', id);
  };
  const addTodo = (userData) => {
    //  TODO
    // validate userInput useing Regex
    if (userData === '' || userData === ' ')
      return setNoEmpty('please write something!');
    setNoEmpty(null);

    // console.log('user input:::', userData)
    let todoData = [...todos];
    // TODO
    // use lib for handling unique IDs
    // let randomId = Math.floor(Math.random() * 9999999999);
    let randomId = Date.now()
    let newData = { id: randomId, text: userData, completed: false };
    let newTodo = [...todoData, newData];
    // console.log(todos)
    localStorage.setItem('todoData', JSON.stringify(newTodo));
    newTodo = JSON.parse(localStorage.getItem('todoData'));
    // console.log('local storage:::', localStorage.getItem('todoData'))
    setTodos(newTodo);
  };

  const handleFilter = () => {
    let filteredCompleted = () => todos.filter((i) => !i.completed);
    localStorage.setItem('todoData', JSON.stringify(filteredCompleted()));
    let filteredCompletedd = JSON.parse(localStorage.getItem('todoData'));
    setTodos(filteredCompletedd);
  };
  const handleDelete = (id) => {
    let updatedTodos = todos.filter((item) => item.id !== id);
    localStorage.setItem('todoData', JSON.stringify(updatedTodos));
    updatedTodos = JSON.parse(localStorage.getItem('todoData'));
    setTodos(updatedTodos);
  };

  const todoItems = todos.map((item) => (
    <TaskListItem
      sx={{}}
      style={{
        // backgroundColor: 'red',
      }}
      key={item.id}
      item={item}
      handleChange={handleChange}
      handleDelete={handleDelete}
    />
  ));
  const appTheme = createTheme(theme);
  console.log('appTheme: ', theme);

  return (
    <ThemeProvider theme={appTheme}>
      <Layout count={NumberOfTodos}>
        <TaskListInput noEmpty={noEmpty} items={todos} addTodo={addTodo} />
        <div  sx={{ maxHeight: '30rem', overflow: 'auto' }}>
          {todoItems}
        </div>
        <Button
          variant="contained"
          sx={{ marginTop: '3rem', float: 'right' }}
          onClick={handleFilter}
        >
          Clear accomplished!
        </Button>
      </Layout>
    </ThemeProvider>
  );
}
