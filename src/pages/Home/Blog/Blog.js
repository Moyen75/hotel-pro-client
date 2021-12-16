import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import blog1 from '../../../images/blog_post_01.jpg'
import blog2 from '../../../images/blog_post_02.jpg'
import blog3 from '../../../images/blog_post_03.jpg'
import blog4 from '../../../images/blog_post_04.jpg'

const Blog = () => {
    return (
        <Box sx={{ backgroundColor: '#f2f6ff', marginTop: "70px", paddingX: '30px', paddingY: '70px' }}>
            <Typography variant='h5' sx={{ marginBottom: "70px" }}>
                OUR BLOG POSTS
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box className="blog-time">
                                    <img style={{ objectFit: "cover", height: '100%', width: '100%' }} src={blog1} alt="" />
                                    <Typography variant='h6' className='time-blog'>
                                        20 Oct 2020
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box sx={{ textAlign: "left", padding: '16px 15px', backgroundColor: 'white' }}>
                                    <Typography variant='h6'>
                                        Stumptown Tofu Schlitz
                                    </Typography>
                                    <Typography sx={{ color: "gray" }}>
                                        Branding / Admin
                                    </Typography>
                                    <Typography sx={{ marginY: "10px" }}>
                                        Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...
                                    </Typography>
                                    <a style={{ textDecoration: "none", color: "tomato" }} href="/">CONTINUE READING</a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box className="blog-time">
                                    <img style={{ objectFit: "cover", height: '100%', width: '100%' }} src={blog2} alt="" />
                                    <Typography variant='h6' className='time-blog'>
                                        21 Oct 2020
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box sx={{ textAlign: "left", padding: '16px 15px', backgroundColor: 'white' }}>
                                    <Typography variant='h6'>
                                        Stumptown Tofu Schlitz
                                    </Typography>
                                    <Typography sx={{ color: "gray" }}>
                                        Branding / Admin
                                    </Typography>
                                    <Typography sx={{ marginY: "10px" }}>
                                        Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...
                                    </Typography>
                                    <a style={{ textDecoration: "none", color: "tomato" }} href="/">CONTINUE READING</a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box className="blog-time">
                                    <img style={{ objectFit: "cover", height: '100%', width: '100%' }} src={blog3} alt="" />
                                    <Typography variant='h6' className='time-blog'>
                                        22 Oct 2020
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box sx={{ textAlign: "left", padding: '16px 15px', backgroundColor: 'white' }}>
                                    <Typography variant='h6'>
                                        Stumptown Tofu Schlitz
                                    </Typography>
                                    <Typography sx={{ color: "gray" }}>
                                        Branding / Admin
                                    </Typography>
                                    <Typography sx={{ marginY: "10px" }}>
                                        Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...
                                    </Typography>
                                    <a style={{ textDecoration: "none", color: "tomato" }} href="/">CONTINUE READING</a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <Box className="blog-time">
                                    <img style={{ objectFit: "cover", height: '100%', width: '100%' }} src={blog4} alt="" />
                                    <Typography variant='h6' className='time-blog'>
                                        23 Oct 2020
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={6}>
                                <Box sx={{ textAlign: "left", padding: '16px 15px', backgroundColor: 'white' }}>
                                    <Typography variant='h6'>
                                        Stumptown Tofu Schlitz
                                    </Typography>
                                    <Typography sx={{ color: "gray" }}>
                                        Branding / Admin
                                    </Typography>
                                    <Typography sx={{ marginY: "10px" }}>
                                        Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...
                                    </Typography>
                                    <a style={{ textDecoration: "none", color: "tomato" }} href="/">CONTINUE READING</a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;