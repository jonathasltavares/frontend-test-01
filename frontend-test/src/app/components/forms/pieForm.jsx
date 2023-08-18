'use client'
import InputComponent from "./input"
import ButtonComponent from "./button"

import { useState, useContext, useEffect } from "react"
import { useRouter } from "next/navigation"

import { WidgetsContext } from "@/app/contexts/widgets"

import { Box } from "@mui/material"

export default function lineForm({operation, id}) {
    const { widgets, addWidget, updateWidget } = useContext(WidgetsContext)
    const router = useRouter()
    const [inputNameData, setInputNameData] = useState("");
    const handleChange = (event) => {
      setInputNameData(event.target.value);
    };
  
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        switch(operation){
          case 'add':
            setInputNameData('')
            setIsReady(true)
            break;
          case 'update':
            const fetchWidgets = async () => {
                const widget = widgets.find(widget => widget.id == id)
                setInputNameData(widget.name)
                setIsReady(true)
            }
            fetchWidgets()
            console.log(widgets)
            break;
        }
      }, [operation])
  
    const  handleClick = ()=>{
      switch(operation){
        case 'add':
          if(inputNameData.length > 0){
            addWidget({name: inputNameData, type: 'pie'})
            setInputNameData('')
            router.push('/')
          }
          break;
          case 'update':
            if (inputNameData.length > 0) {
              const updatedWidget = { id: id, name: inputNameData, type: 'pie' };
              updateWidget(id, updatedWidget); 
              setInputNameData('');
              router.push('/');
            }
            break;
        }
      }


    if(isReady){
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
                <InputComponent value={inputNameData} isDisabled={false} isRequired={true} label="Name" onChange={handleChange} />
                <ButtonComponent size={'large'} isDisabled={false} variant="contained" text={operation} color="#1976d2" onClick={handleClick}/>
            </div>
        </Box>
    )
    }else{
        return(
            <h1>carregando...</h1>
        )
    }
}