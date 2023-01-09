import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import '../../../Style/Style.css'

const Banner = () => {
    return (
        <Box className="banner">
            <Box sx={{ maxWidth: '700px', padding: "15px" }}>
                <Typography variant='h2' sx={{ marginBottom: "20px" }}>
                    ASIAN RESTAURANT
                </Typography>
                <Typography sx={{ marginBottom: "40px", textAlign: "justify" }}>
                    Asian cuisine is local, authentic, and traditional. It is rich in flavor and taste from the herbs and spices used in the preparations. Asian cuisine features multicultural dishes from diverse cultures and origins from southeast Asia, Europe, America, and around the globe. Asian food is reminiscent of people that have visited Asia or have had the Asian cuisine taste – a taste of Asia. Asia is a large region which makes it difficult to pick out traditional Asian dishes. The food from this region is influenced by the history, experiences, culture, and lifestyle of the people.
                </Typography>
                <Button sx={{
                    backgroundColor: '#12adeb', color: 'white', marginRight: "10px", padding: "15px", '&:hover': {
                        background: "#12adeb", color: ' #000 '
                    },
                }} variant='contained' className='banner-button'>ORDER RIGHT NOW</Button>
                <Button sx={{
                    backgroundColor: 'white', color: ' #000 ', marginLeft: "10px", padding: "15px", '&:hover': {
                        background: "white", color: '#12adeb'
                    },
                }} variant='contained' className='banner-button'>DOWNLOAD MENUS</Button>
            </Box>
        </Box>
    );
};

export default Banner;