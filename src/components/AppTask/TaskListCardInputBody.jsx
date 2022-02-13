import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {  Typography } from '@mui/material'


export default function TaskListCardInputBody({
  input,
 handleInput,
  noEmpty: checkEmptyTextMessage,
}) {


  return (
    <>
    


        <TextField
          id="filled-basic"
          label="Add Task"
          variant="filled"
          fullWidth
          size="small"
          value={input}
          onChange={(evt) => handleInput(evt)}
          sx={{
            flexShrink: 0,
            width: { xs: '100%', sm: '60%' },
            input: {
              '&:focus': {
                color: 'GrayText',
                fontStyle: 'italic',
                fontWeight: '400',
              },
            },
          }}
        />

   
     
    </>
  )
}
