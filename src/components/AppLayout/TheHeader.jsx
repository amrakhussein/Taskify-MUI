import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function TheHeading({ count }) {
  const displayHeading = () => {
    const showOneTaskCount = (
      <Typography variant="h6">One task to finish! </Typography>
    );
    const showTaskCount = (
      <Typography variant="h6">{count} tasks to finish.. </Typography>
    );
    const showTaskMessage = <Typography sx={{
      fontSize: {xs: '1.25rem', sm: '2rem'}
    }}>let's make a task!</Typography>;
    
    return count === 0 ? showTaskMessage : count === 1 ? showOneTaskCount : count > 1 ? showTaskCount : null;
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
            sx={{ flexGrow: 1, fontSize: {xs: '2rem', sm:'3rem'}, fontWeight: 'bold' }}
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
