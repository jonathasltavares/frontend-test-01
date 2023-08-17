import { Button } from "@mui/material"

export default function ButtonComponent({variant, text, onClick, color, isDisabled, size}){
    const stringColor = `bg-[${color}]`
    return(
    <Button
        disabled={isDisabled}
        variant={variant}
        onClick={onClick}
        className={stringColor}
        size={size}
    >
        {text}
    </Button>
    )
}