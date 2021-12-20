import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router';
import useDinner from '../../hooks/useDinner';
import Footer from '../../pages/Home/Footer/Footer';
import OrderModal from '../OrderModal/OrderModal';

const Dinner = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const breakfast = useDinner()
    const navigate = useNavigate()
    const handleDetails = id => {
        navigate(`/dinner-details/${id}`)
    }
    const handleOrder = () => {
        handleOpen()

    }
    return (
        <Box>
            {
                breakfast && <Container>
                    <Typography variant='h4' className='breakfast'>
                        DINNER MENUS
                    </Typography>
                    <Grid container spacing={2}>
                        {
                            breakfast?.map(b => <Grid item xs={12} md={4} sx={{ boxDhadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }}>
                                <Box className='breakfast-item'>
                                    <Box className='type-price breakfast-img'>
                                        <img style={{ width: '100%', height: '100%' }} src={b.img} alt="" />
                                        <Typography variant='h6' className="price-type">
                                            ${b.price}
                                        </Typography>
                                        < OrderModal
                                    open={open}
                                    match={b}
                                    handleClose={handleClose}
                                ></OrderModal >
                                    </Box>
                                    <Box className='breakfast-seeMore'>
                                        <button onClick={() => handleDetails(b._id)}>SEE DETAILS</button>
                                    </Box>
                                    <Box className='breakfast-order'>
                                    <button onClick={handleOrder} className='details-btn'>ORDER NOW</button>
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

export default Dinner;