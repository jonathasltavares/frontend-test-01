'use client'
import React, { useState, useEffect, useContext } from 'react';

import { useRouter } from 'next/navigation';

import { Box } from '@mui/material';

import { WidgetsContext } from '@/app/contexts/widgets';
import ButtonComponent from './button';
import InputComponent from './input';

export default function ChartForm({chartType, operation, id}){
    const [data, setData] = useState([]);
    const [chartOptions, setChartOptions] = useState({});
    const router = useRouter();
    const { widgets, addWidget, updateWidget } = useContext(WidgetsContext)

    const handleDataChange = (e) => {
        const inputValues = e.target.value.split(',').map(Number);
        setData(inputValues);
    };

    const generateChart = () => {
        const options = {
        chart: {
            type: chartType,
        },
        title: {
            text: `${chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart Example`,
        },
        };

        setChartOptions(options);
    };

        useEffect(() => {
            switch(operation){
            case 'add':
                setData('')
                break;
            case 'update':
                const fetchWidgets = async () => {
                    const widget = widgets.find(widget => widget.id == id)
                    setData(widget.name)
                }
                fetchWidgets()
                console.log(widgets)
                break;
            }
        }, [operation])
    
    const  handleClick = ()=>{
      switch(operation){
        case 'add':
          if(data.length > 0){
            generateChart()
            addWidget({type: chartType, data: data, options: chartOptions})
            setData('')
            router.push('/')
          }
          break;
          case 'update':
            if (data.length > 0) {
              generateChart()
              const updatedWidget = { id: id, type: chartType, data: data, options: chartOptions };
              updateWidget(id, updatedWidget); 
              setData('');
              router.push('/');
            }
            break;
        }
      }

  return (
    <Box
        component="form"
        sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <div className='flex flex-col items-center'>
            <InputComponent value={data} isDisabled={false} isRequired={true} label="Enter Data (comma-separated)" onChange={handleDataChange} />
            <ButtonComponent size={'large'} isDisabled={false} variant="contained" text={operation} color="#1976d2" onClick={handleClick}/>
        </div>
    </Box>
  );
};

