import React from 'react'
import { Checkbox, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined'

export default function TaskListItem({ task, handleChange, handleDelete }) {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          // color="grey"
          sx={{
            bgcolor: 'background.paper',
            my: 5,
            py: 3,
            px: { xs: 1, md: 2 },
            boxShadow: '0.1rem 0.2rem rgba(0, 0, 0, 0.1)',
          }}
        >
          <Grid item xs={8}>
            <Typography sx={{ color: 'text.main' }}>{task.text}</Typography>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Checkbox
              checked={task.completed}
              onChange={() => handleChange(task.id)}
              sx={{
                color: 'cool.main',
                '&.Mui-checked': {
                  opacity: '77%',
                  color: 'cool.main',
                  '& .MuiSvgIcon-root': { fontSize: { xs: 22, md: 28 } },
                },
              }}
            />

            <HighlightOffOutlinedIcon
              sx={{
                color: 'cool.dark',
                fontSize: { xs: '1.5rem', md: '1.7rem' },
                cursor: 'pointer',
              }}
              onClick={() => handleDelete(task.id)}
            ></HighlightOffOutlinedIcon>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
