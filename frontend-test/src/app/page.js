'use client'
import { useState } from "react"

import Widgets from "./components/widgets"
import { HeaderSearchBar } from "./components/ui/header" 
import SpeedDialComponent from "./components/ui/speedDial"

import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';

export default function Home() {
  const [widgets, setWidgets] = useState([
    {
      id: 1,
      name: "Widget 1",
    },
    {
      id: 2,
      name: "Widget 2",
    },
    {
      id: 3,
      name: "Widget 3",
    }
  ])

  const actions = [
    { icon: <ShowChartOutlinedIcon />, name: 'Line Graph' },
    { icon: <PieChartOutlineOutlinedIcon />, name: 'Pie Chart' },
    { icon: <BarChartOutlinedIcon />, name: 'Bar Chart' },
    { icon: <DonutLargeOutlinedIcon />, name: 'Donut Chart' },
  ];
  return (
   <>
    <HeaderSearchBar />
    <Widgets widgets={widgets}/>
    <SpeedDialComponent actions={actions}/>
   </>
  )
}
