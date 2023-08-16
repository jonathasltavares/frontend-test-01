import './globals.css'
import { Inter } from 'next/font/google'

import Header from "./components/ui/header"
import SpeedDialComponent from "./components/ui/speedDial"

import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import { WidgetsProvider } from './contexts/widgets';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Delfosim frontend test',
  description: 'Desafio para ingressar como Front-end Developer',
}

export default function RootLayout({ children }) {
  const actions = [
    { icon: <ShowChartOutlinedIcon />, name: 'Line Graph' },
    { icon: <PieChartOutlineOutlinedIcon />, name: 'Pie Chart' },
    { icon: <BarChartOutlinedIcon />, name: 'Bar Chart' },
    { icon: <DonutLargeOutlinedIcon />, name: 'Donut Chart' },
  ];

  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_ico/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon_ico/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_ico/favicon-16x16.png" />
      <link rel="manifest" href="/favicon_ico/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <Header/>
        <WidgetsProvider>
          {children}
          <SpeedDialComponent actions={actions}/>
        </WidgetsProvider>
      </body>
    </html>
  )
}
