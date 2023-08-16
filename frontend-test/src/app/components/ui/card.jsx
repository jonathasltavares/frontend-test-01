'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from "@mui/material/Popover";
import Button from '@mui/material/Button';

import React from 'react';

export default function CardComponent({ width, title, primaryButton, secondaryButton }) {
    const [anchorEl, setAnchorEl] = React.useState(
        null
      );
    
      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? "simple-popover" : undefined;
    

    return(
        <Card className={width}>
        <CardHeader
            action={
            <IconButton aria-label="settings" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            }
            
            
            title={title}
        /> 
        <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
                }}
        >
            <Button variant="text" color="primary">{primaryButton}</Button>
            <Button variant="text" color="error">{secondaryButton}</Button>
        </Popover>
        <CardContent>
      </CardContent>
    </Card>
    )
}