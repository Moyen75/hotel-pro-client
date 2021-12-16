import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import breakfast from '../../../images/breakfast_item.jpg'
import launch from '../../../images/lunch_item.jpg'
import dinner from '../../../images/dinner_item.jpg'

const Types = () => {
    return (
        <Container>
            <Typography variant='h5' sx={{ marginY: '80px' }}>
                WEEKLY FEATURED FOOD
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Container sx={{ backgroundColor: '#f2f6ff' }}>
                        <Typography className='line' variant='h5' sx={{ textAlign: 'left', padding: '16px 0 8px' }}>
                            Breakfast
                        </Typography>

                        <Box sx={{ paddingY: '30px' }}>
                            <Box className='type-price'>
                                <img style={{ width: '100%' }} src={breakfast} alt="" />
                                <Typography variant='h6' className="price-type">
                                    $7-$55
                                </Typography>
                            </Box>
                            <Box sx={{ backgroundColor: "white", paddingX: "20px" }}>
                                <Typography variant='h6' sx={{ paddingTop: "15px" }}>
                                    Kale Chips Art Party
                                </Typography>
                                <Typography sx={{ textAlign: 'left', paddingTop: "15px" }}>
                                    Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Container sx={{ backgroundColor: '#f2f6ff' }}>
                        <Typography className='line' variant='h5' sx={{ textAlign: 'left', padding: '16px 0 8px' }}>
                            Launch
                        </Typography>

                        <Box sx={{ paddingY: '30px' }}>
                            <Box className='type-price'>
                                <img style={{ width: '100%' }} src={launch} alt="" />
                                <Typography variant='h6' className="price-type">
                                    $7-$765
                                </Typography>
                            </Box>
                            <Box sx={{ backgroundColor: "white", paddingX: "20px" }}>
                                <Typography variant='h6' sx={{ paddingTop: "15px" }}>
                                    Taiyaki Gastro Tousled
                                </Typography>
                                <Typography sx={{ textAlign: 'left', paddingTop: "15px" }}>
                                    Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Container sx={{ backgroundColor: '#f2f6ff' }}>
                        <Typography className='line' variant='h5' sx={{ textAlign: 'left', padding: '16px 0 8px' }}>
                            Dinner
                        </Typography>

                        <Box sx={{ paddingY: '30px' }}>
                            <Box className='type-price'>
                                <img style={{ width: '100%' }} src={dinner} alt="" />
                                <Typography variant='h6' className="price-type">
                                    $7-$550
                                </Typography>
                            </Box>
                            <Box sx={{ backgroundColor: "white", paddingX: "20px" }}>
                                <Typography variant='h6' sx={{ paddingTop: "15px" }}>
                                    Batch Squid Jean Shorts
                                </Typography>
                                <Typography sx={{ textAlign: 'left', paddingTop: "15px" }}>
                                    Dreamcatcher squid ennui cliche chicharros nes echo small batch jean shorts hexagon street art knausgaard wolf
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Types;