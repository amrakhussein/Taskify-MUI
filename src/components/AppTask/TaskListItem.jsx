import { Box, Checkbox, } from '@mantine/core'

export default function TaskListItem({ task, handleChange, handleDelete }) {
  console.log('task: ', task);
  return (
    <>
      <Box
        sx={{
          display:'flex',
          flexDirection: 'row',
          justifyContent:'center',
          alignItems:'center',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            background: 'lightblue',
            margin:'1rem 0',
            padding: '1rem 0.4rem',
            px: { xs: 1, md: 2 },
            boxShadow: '0.1rem 0.2rem rgba(0, 0, 0, 0.1)',
          }}
        >
          <pre>
            {JSON.stringify(task,null ,2)}
          </pre>
          
          <div
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
                
              }}
            />

            <i
              sx={{
                color: 'cool.dark',
                fontSize: { xs: '1.5rem', md: '1.7rem' },
                cursor: 'pointer',
              }}
              onClick={() => handleDelete(task.id)}
            ></i>
          </div>
        </Box>
      </Box>
    </>
  )
}
