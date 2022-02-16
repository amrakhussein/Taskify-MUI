import { Box } from '@mantine/core'
import { useForm } from '../../hooks/useForm'
import TaskListCardInput from './TaskListCardInputBody'

export default function TaskListCardAddNew({
  setNoEmpty,
  noEmpty: checkEmptyTextMessage,
  addTask,
  validateInput,
}) {
  const [values, handleChange] = useForm()

  const handleSubmit = (evt) => {
    //
    // checkEmptyTextMessage &&
    //   setWarningMsg('Task cannot be empty - write someting!')

    evt.preventDefault()
    //
    addTask(values.title, values.content)
    values.title = ''
    values.content = ''
  }

  return (
    <Box sx={{ pt: '1rem' }}>
      <p
        variant="h3"
        sx={{ fontSize: '1.5rem', mt: '1rem', color: 'GrayText' }}
      >
        Let's add a task now!
      </p>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box component="form" sx={{}} onSubmit={handleSubmit}>
          <TaskListCardInput
            inputValues={values}
            handleChange={handleChange}
          />

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <button type="submit">Save Task</button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
