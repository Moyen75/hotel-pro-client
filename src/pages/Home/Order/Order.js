import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import cook1 from '../../../images/cook_01.jpg'
import cook2 from '../../../images/cook_02.jpg'

const Order = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ margin: '180px 0 100px', width: '70%', minHeight: "500px" }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={4}>
                        <img style={{ width: '100%' }} src={cook1} alt="" />
                    </Grid>
                    <Grid className='middle-order' xs={12} md={4} sx={{ backgroundColor: '#53585b', minHeight: "400px", color: 'white', display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Box sx={{ width: "100%" }}>
                            <Typography variant="h5" sx={{ padding: '5px' }}>
                                WE COOK DELECIOUS
                            </Typography>
                            <Box sx={{ width: '100%', height: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box>
                                    <Box sx={{ backgroundColor: '#f2f2f240', display: 'inline-block', padding: '15px 25px', borderRadius: '5px' }}>
                                        <Typography>
                                            YOU CAN CALL US ON:
                                        </Typography>
                                        <Typography variant='h6'>
                                            + 1234 567 8910
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ width: '25px', height: '25px', border: '1px solid #12adeb', borderRadius: '50%', justifyContent: 'center', marginX: 'auto', marginY: '20px', padding: '13px' }}>
                                        or
                                    </Typography>
                                    <Button sx={{
                                        background: "white", color: 'black', '&:hover': {
                                            background: "white", color: '#12adeb', border: 'none', boxShadow: 'none'
                                        },
                                    }} variant='contained' className='banner-button'>ORDER RIGHT NOW</Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={4} >
                        <img style={{ width: '100%' }} src={cook2} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Order;