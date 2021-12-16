import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bookImg from '../../../images/book_left_image.jpg'
import Form from '../Form/Form';

const Booking = () => {
    return (
        <Box className='booking'>
            <Box sx={{ maxWidth: '800px' }}>
                <Typography variant='h5' sx={{ color: 'white', marginBottom: '50px' }}>
                    BOOK YOUR TABLE NOW
                </Typography>
                <Grid container>
                    <Grid xs={12} md={6}>
                        <img width='100%' height='100%' src={bookImg} alt="" />
                    </Grid>
                    <Grid xs={12} md={6} sx={{ backgroundColor: 'white' }}>
                        <Box sx={{ height: '100%', paddingTop: '20px' }}>
                            <Typography variant='h4'>
                                Reservation
                            </Typography>
                            <Form></Form>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Booking;