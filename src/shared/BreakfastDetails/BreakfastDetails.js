import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useBreakfast from '../../hooks/useBreakfast';

const BreakfastDetails = () => {
    const [match, setMach] = useState({})
    const { id } = useParams()
    const breakfast = useBreakfast()
    useEffect(() => {
        const current = breakfast?.find(b => b._id === id)
        setMach(current)
    }, [id, breakfast])
    return (
        <Box sx={{marginY:"10px"}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <Box>
                            <img style={{width:"100%"}} src={match?.img} alt="" />
                        </Box>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Typography variant='h5'>
                            {match?.title}
                        </Typography>
                        <Typography variant='h6'>
                           price: ${match?.price}
                        </Typography>
                        <Typography>
                           {match?.blog}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default BreakfastDetails;