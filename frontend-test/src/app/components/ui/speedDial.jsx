import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Box } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';

export default function SpeedDialComponent({ actions }) {
    return (
      <Box sx={{ position:'fixed', bottom: 1, width:'100%', zindex:100, height: 30, transform: 'translateZ(0px)', flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic"
          sx={{ position: 'absolute', bottom: 16, right: 16}}
          icon={<SpeedDialIcon />}
          FabProps= {{
            className:"bg-[#1976d2]"
        }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    );
  }