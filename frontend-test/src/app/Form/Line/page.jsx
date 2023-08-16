'use client'

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { WidgetsContext } from '@/app/contexts/widgets';

export default function LineForm(){

  const router = useRouter()
  const [inputData, setInputData] = useState('')
  const { addWidget } = useContext(WidgetsContext)

  const handleChange = (event) => {
    setInputData(event.target.value)
  }

  const handleClick = () => {
    if(inputData.length > 0){
      addWidget({name: inputData, type: 'line'})
      setInputData('')
      router.push('/')

    }
  }

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
            value={inputData}
            onChange={handleChange}
          />
          <Button variant="contained" className="bg-[#1976d2]"onClick={handleClick}>Add</Button>
        </div>
      </Box>
    )
}