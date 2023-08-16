import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Header } from '../../components/ui/header';

export default function LineForm(){
    return(
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='flex flex-col items-center'>
          <TextField
            required
            id="outlined-required"
            label="Name"
          />
          <Button variant="contained" bgColor="primary" className="bg-[#1976d2]">Add</Button>
        </div>
      </Box>
    )
}