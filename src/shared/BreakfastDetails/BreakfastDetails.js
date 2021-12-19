import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useBreakfast from '../../hooks/useBreakfast';
import Footer from '../../pages/Home/Footer/Footer';
import OrderModal from '../OrderModal/OrderModal';

const BreakfastDetails = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [match, setMach] = useState({})
    const { id } = useParams()
    const breakfast = useBreakfast()
    useEffect(() => {
        const current = breakfast?.find(b => b._id === id)
        setMach(current)
    }, [id, breakfast])
    const handleOrder = () => {
        handleOpen()

    }
    return (
        <Box sx={{ marginY: "100px" }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4} md={4}>
                        <Box>
                            <img style={{ width: "100%" }} src={match?.img} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Box sx={{ textAlign: "left" }}>
                            <Typography variant='h5' sx={{ paddingY: "10px" }}>
                                {match?.title}
                            </Typography>
                            <Typography variant='h6' sx={{ paddingY: "10px" }}>
                                price: ${match?.price}
                            </Typography>
                            <Typography sx={{ paddingY: "10px" }}>
                                {match?.blog}
                            </Typography>
                            <Box sx={{ paddingY: "10px" }}>
                                <button onClick={handleOrder} className='details-btn'>ORDER NOW</button>
                                <button className='details-btn'>ADD TO CART</button>
                                < OrderModal
                                    open={open}
                                    match={match}
                                    handleClose={handleClose}
                                ></OrderModal >
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Box className='delivery-options' sx={{ textAlign: 'left' }}>
                            <Typography sx={{ color: 'gray' }}>
                                Delivery Options
                            </Typography>
                            <Box sx={{ padding: "1%" }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>
                                        <i class="fas fa-truck"></i>  Home Delivery
                                        <span style={{ display: 'block', margin: '0 auto' }}>30-50 minutes</span>
                                    </Typography>
                                    <Typography>
                                        $12
                                    </Typography>

                                </Box>

                            </Box>
                            <Box sx={{ padding: "1%" }}>
                                <Typography>
                                    <i class="far fa-money-bill-alt"></i>Cash on Delivery available
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ textAlign: 'left', marginTop: '15px' }}>
                            <Typography sx={{ color: 'gray' }}>
                                Time
                            </Typography>
                            <Box sx={{ padding: "1%" }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>
                                        Available On
                                    </Typography>
                                    <Typography>
                                        9:00am - 11:00pm
                                    </Typography>
                                </Box>

                            </Box>
                            <Box sx={{ padding: "1%" }}>
                                <Typography>
                                    sunday - Friday
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default BreakfastDetails;