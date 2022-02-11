import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TheHeading({ count }) {
  const displayHeading = () => {
    const showTaskCount = (
      <Typography variant="h6">{count} tasks to finish.. </Typography>
    );
    const showTaskMessage = <h2>let's make a task!</h2>;
    return count !== 0 ? showTaskCount : showTaskMessage;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: 'primary',
          py:2
        }}
      >
        <Toolbar>
          <Typography
            variant="h1"
            sx={{ flexGrow: 1, fontSize: '3rem', fontWeight: 'bold' }}
          >
            Taskify
          </Typography>

          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>
            {displayHeading()}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
