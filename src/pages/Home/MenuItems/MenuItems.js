import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import breakfast from '../../../images/cook_breakfast.png'
import launch from '../../../images/cook_lunch.png'
import dinner from '../../../images/cook_dinner.png'
import dessert from '../../../images/cook_dessert.png'



const MenuItems = () => {
    return (
        <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                        <a style={{ textDecoration: "none", color: 'black' }} href="/"><img style={{ border: '10px solid #eaf0ff', borderRadius: '50%' }} src={breakfast} alt="" />
                            <Typography variant='h5' sx={{ textDecoration: 'none' }}>
                                Breakfast
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a style={{ textDecoration: "none", color: 'black' }} href="/"><img style={{ border: '10px solid #eaf0ff', borderRadius: '50%' }} src={launch} alt="" />
                            <Typography variant='h5' sx={{ textDecoration: 'none' }}>
                                Launch
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a style={{ textDecoration: "none", color: 'black' }} href="/"><img style={{ border: '10px solid #eaf0ff', borderRadius: '50%' }} src={dinner} alt="" />
                            <Typography variant='h5' sx={{ textDecoration: 'none' }}>
                                Dinner
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a style={{ textDecoration: "none", color: 'black' }} href="/"><img style={{ border: '10px solid #eaf0ff', borderRadius: '50%' }} src={dessert} alt="" />
                            <Typography variant='h5' sx={{ textDecoration: 'none' }}>
                                Desserts
                            </Typography>
                        </a>
                    </Grid>
                </Grid>
        </Container>
    );
};

export default MenuItems;