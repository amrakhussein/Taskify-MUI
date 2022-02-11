import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

export default function TaskListInput({ addTodo: addTask, noEmpty }) {
  const [input, setInput] = useState('');
  const handleInput = (evt) => setInput(evt.target.value);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTask(input);
    setInput('');
  };
  return (
    <>
    <h1>{noEmpty}</h1>
      <Box
        component="form"
        sx={{
          display:'flex',
          justifyContent:'space-between',
          '& > :not(style)': { my: 5, ml: {sm:3, } },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-basic"
          label="Add Task"
          variant="filled"
          fullWidth
          size='small'
          color= 'success'
          value={input}
          onChange={handleInput}
          sx={{
            flexShrink: 0,
            width: '60%',
          }}
        />
        <div>

        <Button sx={{display:'block'}} variant='outlined' type="submit">Enter Task</Button>
        <Typography variant='body' sx={{color:'GrayText', pt:1}}>or press Enter!</Typography>
        </div>
      </Box>
    </>
  );
}
