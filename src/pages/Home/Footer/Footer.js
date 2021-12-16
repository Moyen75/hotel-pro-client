import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box>
            <Box className='sign-up'>
                <Typography variant='h6' sx={{ marginY: "25px", color: "white" }}>
                    SIGNUP FOR OUR NEWSLETTERS
                </Typography>
                <form >
                    <input type="text" name="" placeholder='Enter your Email here...' id="" />
                    <button>sign up now</button>
                </form>
            </Box>
        </Box>
    );
};

export default Footer;