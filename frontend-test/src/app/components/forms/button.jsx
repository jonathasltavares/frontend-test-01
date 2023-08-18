import { useContext } from "react"

import { Button } from "@mui/material"
import { WidgetsContext } from "../../contexts/widgets"
export default function ButtonComponent({variant, text, onClick, color, isDisabled, size}){
    const { addWidget,  } = useContext(WidgetsContext)

    const stringColor = `bg-[${color}]`

    const handleOnClick = ()=>{
        onClick()
    }
    return(
    <Button
        disabled={isDisabled}
        variant={variant}
        onClick={handleOnClick}
        className={stringColor}
        size={size}
    >
        {text}
    </Button>
    )
}