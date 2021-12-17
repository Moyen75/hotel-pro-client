import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import useBlogs from '../../../hooks/useBlogs'

const Blog = () => {
    const blogs = useBlogs()
    return (
        <Box sx={{ backgroundColor: '#f2f6ff', marginTop: "70px", paddingX: '30px', paddingY: '70px' }}>
            <Typography variant='h5' sx={{ marginBottom: "70px" }}>
                OUR BLOG POSTS
            </Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        blogs?.map(blog => <Grid item xs={12} md={6}>
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Box className="blog-time">
                                        <img style={{ objectFit: "cover", height: '100%', width: '100%' }} src={blog.img} alt="" />
                                        <Typography variant='h6' className='time-blog'>
                                            {blog.date}
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <Box sx={{ textAlign: "left", padding: '16px 15px', backgroundColor: 'white' }}>
                                        <Typography variant='h6'>
                                            {blog.title}
                                        </Typography>
                                        <Typography sx={{ color: "gray" }}>
                                            {blog.status}
                                        </Typography>
                                        <Typography sx={{ marginY: "10px" }}>
                                            {blog.blog}
                                        </Typography>
                                        <a style={{ textDecoration: "none", color: "tomato" }} href="/">CONTINUE READING</a>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Blog;