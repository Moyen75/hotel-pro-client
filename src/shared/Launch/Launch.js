import { Box } from '@mui/system';
import { Container, Grid, Typography } from '@mui/material';
import useLaunch from '../../hooks/useLaunch';
import Navigation from '../../pages/Home/Navigation/Navigation';

import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../../pages/Home/Footer/Footer';

const Launch = () => {
    const launch = useLaunch()
    const navigate = useNavigate()
    const handleDetails = id => {
        navigate(`/launch-details/${id}`)
    }
    return (
        <Box>
            <Navigation />
            {
                launch && <Container>
                    <Typography variant='h4' className='breakfast'>
                        LAUNCH MENUS
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            launch?.map(b => <Grid item xs={12} md={4} sx={{ boxDhadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
                                <Box className='breakfast-item'>
                                    <Box className='type-price breakfast-img'>
                                        <img style={{ width: '100%', height: '100%' }} src={b.img} alt="" />
                                        <Typography variant='h6' className="price-type">
                                            ${b.price}
                                        </Typography>
                                    </Box>
                                    <Box className='breakfast-seeMore'>
                                        <button onClick={() => handleDetails(b._id)}>SEE DETAILS</button>
                                    </Box>
                                    <Box className='breakfast-order'>
                                        <button>ORDER NOW</button>
                                    </Box>
                                </Box>
                            </Grid>)
                        }
                    </Grid>
                </Container>
            }
            <Footer></Footer>
        </Box>
    );
};

export default Launch;