import { Box } from '@mantine/core';
import * as React from 'react';

export default function TheHeader({ count }) {
  const displayHeading = () => {
    const showOneTaskCount = (
      <p variant="h6">One task to finish! </p>
    );
    const showTaskCount = (
      <p variant="h6">{count} tasks to finish.. </p>
    );
    const showTaskMessage = <p sx={{
      fontSize: {xs: '1.25rem', sm: '2rem'}
    }}>let's make a task!</p>;
    
    return count === 0 ? showTaskMessage : count === 1 ? showOneTaskCount : count > 1 ? showTaskCount : null;
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        position="static"
        sx={{
          bgcolor: 'primary',
          py:2
        }}
      >
        <div>
          <p
            variant="h1"
            sx={{ flexGrow: 1, fontSize: {xs: '2rem', sm:'3rem'}, fontWeight: 'bold' }}
          >
            Taskify
          </p>

          <p variant="h6" sx={{ flexGrow: 1, textAlign: 'right' }}>
            {displayHeading()}
          </p>
        </div>
      </Box>
    </Box>
  );
}
