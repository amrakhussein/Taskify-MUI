import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Button, Typography } from '@mui/material'

export default function TaskListInput({
  addTodo: addTask,
  noEmpty: checkEmptyText,
}) {
  const [input, setInput] = useState('')
  const handleInput = (evt) => setInput(evt.target.value)
  const handleSubmit = (evt) => {
    evt.preventDefault()
    addTask(input)
    setInput('')
  }
  return (
    <>
      <Typography variant="h5" sx={{ p: 4 }}>
        {checkEmptyText}
      </Typography>

      {/* Add Task input */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          mt: { xs: -6, sm:2 },
          mb: { xs: -5 },
          flexDirection: { xs: 'column', sm: 'row' },
          '& > :not(style)': { my: 5, ml: { sm: 3 } },
        }}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <TextField
          id="filled-basic"
          label="Add Task"
          variant="filled"
          fullWidth
          size="small"
          value={input}
          onChange={handleInput}
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
        <Box
          sx={{ alignSelf: 'end', width: '100%', pt: { sm: 6 }, pl: { sm: 3 } }}
        >
          <Button
            sx={{ display: 'inline-block', width: '100%', mt: { xs: -10 } }}
            variant="outlined"
            type="submit"
          >
            Save Task
          </Button>
          <Typography
            variant="body"
            sx={{
              color: 'GrayText',
              display: 'block',
              textAlign: { xs: 'end' },
              mt: { xs: -3.5 },
            }}
          >
            or press Enter!
          </Typography>
        </Box>
      </Box>
    </>
  )
}
