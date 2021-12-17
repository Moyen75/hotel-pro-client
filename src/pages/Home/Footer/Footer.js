import { Grid, Typography } from '@mui/material';
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
            <Box className='main-footer'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ marginTop: '17px' }}>
                            All rights reserved by Hotel Transylvania
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <a href="/"><i className="fab fa-facebook-f icon"></i></a>
                        <a href="/"><i className="fab fa-twitter icon"></i></a>
                        <a href="/"><i className="fab fa-linkedin-in icon"></i></a>
                        <a href="/"><i className="fab fa-instagram icon"></i></a>
                        <a href="/"><i className="fab fa-slack icon"></i></a>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ marginTop: '17px' }}>
                            copyright&copy;Muhammad Moyenul Islam
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;