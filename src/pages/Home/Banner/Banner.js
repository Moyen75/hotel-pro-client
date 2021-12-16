import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../Style/Style.css'

const Banner = () => {
    return (
        <Box className="banner">
            <Box sx={{ maxWidth: '700px' }}>
                <Typography variant='h6'>
                    HERE YOU CAN FIND DELECIOUS FOODS
                </Typography>
                <Typography variant='h2'>
                    ASIAN RESTAURANT
                </Typography>
                <Typography>
                    Quisque nec nibh id lacus fringilla eleifend sed sit amet sem. Donec lectus odio, mollis a nisl non, tempor interdum nisl.
                </Typography>
                <Button sx={{
                    backgroundColor: 'tomato', color: 'white', '&:hover': {
                        background: "white", color: 'tomato'
                    },
                }} variant='contained' className='banner-button'>ORDER RIGHT NOW</Button>
            </Box>
        </Box>
    );
};

export default Banner;