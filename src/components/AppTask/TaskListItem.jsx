import {
  Checkbox,

  Grid,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

export default function TaskListItem({ item, handleChange, handleDelete }) {
 

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
          color="grey[500]"
          sx={{
            bgcolor: 'background.paper',
            my: 5,
            py: 3,
            px: 1,
          }}
        >
          <Grid item xs={8}>
            <Typography sx={{ color:'text.main'}}>{item.text}</Typography>
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
              checked={item.completed}
              onChange={() => handleChange(item.id)}
              sx={
                {
                  color: 'action.dark',
                  '&.Mui-checked': {
                      color: 'cool.main',
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                  },
                }
              }
            />

            <HighlightOffOutlinedIcon
              sx={{
                color: 'palette.action.main'
              }}
              onClick={() => handleDelete(item.id)}
            ></HighlightOffOutlinedIcon>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
