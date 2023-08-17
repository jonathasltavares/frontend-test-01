import BarForm from "@/app/components/forms/lineForm"
import DonutForm from "@/app/components/forms/donutForm"
import LineForm from "@/app/components/forms/lineForm"
import PieForm from "@/app/components/forms/pieForm"

import { Typography } from "@mui/material"

export default function addPage({
    params: {chart}
}){
    return(
        <div className="flex flex-col items-center pt-5">
            <Typography variant="h3" gutterBottom>
                Add {chart} Chart
            </Typography>

            {chart === 'line' ? <LineForm operation="add"/>: null}
            {chart === 'pie' ? <PieForm operation="add"/> : null}
            {chart === 'bar' ? <BarForm operation="add"/> : null}
            {chart === 'donut' ? <DonutForm operation="add"/> : null}
        </div>
    )
}