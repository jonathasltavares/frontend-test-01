import BarForm from "@/app/components/forms/barForm"
import DonutForm from "@/app/components/forms/donutForm"
import LineForm from "@/app/components/forms/lineForm"
import PieForm from "@/app/components/forms/pieForm"

import { Typography } from "@mui/material"

export default function addPage({
    params: {chart}
}){
    function formComponent(){
        switch(chart){
            case 'line':
                return <LineForm operation="add"/>
            case 'pie':
                return <PieForm operation="add"/>
            case 'bar':
                return <BarForm operation="add"/>
            case 'donut':
                return <DonutForm operation="add"/>
            
        }
    }
    return(
        <div className="flex flex-col items-center pt-5">
            <Typography variant="h3" gutterBottom>
                Add {chart} Chart
            </Typography>
            {formComponent()}
        </div>
    )
}