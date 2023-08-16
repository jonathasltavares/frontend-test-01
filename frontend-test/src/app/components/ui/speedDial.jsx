import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';

export default function SpeedDialComponent({ actions }) {
    return (
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
    );
  }