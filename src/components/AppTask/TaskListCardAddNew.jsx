import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
// import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import TaskListCardInputBody from './TaskListCardInputBody'
import { Alert, Box, Typography } from '@mui/material'

export default function TaskListCardAddNew({
  setNoEmpty,
  noEmpty: checkEmptyTextMessage,
  addTask,
  validateInput,
}) {
  const [input, setInput] = React.useState('')
  const handleInput = (evt) => {
    //
    validateInput(evt)
    setInput(evt.target.value)
  }
  const [warningMsg, setWarningMsg] = React.useState('')

  const handleSubmit = (evt) => {
    //
    checkEmptyTextMessage &&
      setWarningMsg('Task cannot be empty - write someting!')

    evt.preventDefault()
    if (!checkEmptyTextMessage) {
      addTask(input)
      setInput('')
      setWarningMsg('')
      setNoEmpty(true)
    }
  }

  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box sx={{ pt: '1rem' }}>
      <Typography
        variant="h3"
        sx={{ fontSize: '1.5rem', mt: '1rem', color: 'GrayText' }}
      >
        Let's add a task now!
      </Typography>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        sx={{
          width: { xs: '80%', sm: '40%' },
          height: { sm: '3rem' },
          m: { xs: '1.5rem 1rem', sm: '3rem 6rem 4rem' },
        }}
      >
        Add Task
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        onSubmit={!checkEmptyTextMessage ? handleClose : null}
        aria-labelledby="responsive-dialog-title"
        sx={{
          '& .css-13hpllb-MuiPaper-root-MuiDialog-paper': {
            minWidth: '80%',
            minHeight: '80%',
          },
        }}
      >
        {warningMsg && <Alert severity="warning">{warningMsg}</Alert>}
        <DialogTitle id="responsive-dialog-title"></DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: { xs: 'column' },
              overflow: 'hidden',
              position: 'absolute',
              inset: 0,
              '& > :not(style)': { my: 5, ml: { sm: 3 } },
            }}
            noValidate
            autoComplete="on"
            onSubmit={handleSubmit}
          >
            <DialogContent>
              <DialogContentText>
                <TaskListCardInputBody
                  handleInput={handleInput}
                  input={input}
                />
              </DialogContentText>
            </DialogContent>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}
            >
              {/* <DialogActions> */}

              <Button onClick={handleClose} sx={{}}>
                Go Back
              </Button>

              <Button
                autoFocus
                sx={{ display: 'inline-block' }}
                variant="outlined"
                type="submit"
              >
                Save Task
              </Button>
              {/* </DialogActions> */}
            </Box>
          </Box>
        </Box>
      </Dialog>
    </Box>
  )
}
