import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import loginImg from '../../images/others/undraw_secure_login_pdn4.png'
import google from '../../images/others/google.png'
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { googleSignIn, emailSignIn } = useAuth()
    let navigate = useNavigate();
    let location = useLocation();



    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        emailSignIn(email, password, success, navigate, location)
    }
    const success = () => {
        swal(
            'Great job!',
            'You are successfully logged in!',
            'success'
        )
    }
    return (
        <Box sx={{ backgroundColor: "#f4f4f4" }}>
            <Container >
                <Box sx={{ paddingY: "70px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: { xs: 'none', md: "inline" } }}>
                                <img style={{ width: '100%' }} src={loginImg} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ maxWidth: "600px" }}>
                                <h1> WELCOME BACK</h1>
                                <p>log in to continue</p>
                                <form onSubmit={handleOnSubmit}>
                                    <label htmlFor="email"><input className='login-input'
                                        onBlur={handleEmail}
                                        type="email" placeholder='Enter Email' /><span className='input'><i class="fas fa-user"></i></span></label>
                                    <label htmlFor="password"><input
                                        onBlur={handlePassword}
                                        className='login-input' type="password" placeholder='Enter Password' /><span className='input'><i class="fas fa-key"></i></span></label>
                                    <input className='submit' style={{ display: "block", margin: "10px auto" }} type='submit' value='LOG IN' />
                                </form>
                            </Box>
                            <Typography sx={{ width: '35px', height: "35px", borderRadius: "50%", backgroundColor: 'gray', color: "white", lineHeight: '35px', margin: ' 10px auto' }}>
                                or
                            </Typography>
                            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', padding: '5px' }} onClick={() => googleSignIn(success, navigate, location)}>
                                <img width="20px" src={google} alt="" /><span >Sign in with Google</span>
                            </button>
                            <Box sx={{ marginY: '15px' }}>
                                <span>Don't Have an Account?</span> <Link className='link' to='/register'>Register Now</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Login;