import { Container, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import loginImg from '../../images/others/undraw_secure_login_pdn4.png'
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Register = () => {
    const [userData, setUserData] = useState({})
    const { emailSignUp } = useAuth()
    const navigate = useNavigate()


    const handleOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newData = { ...userData }
        newData[name] = value;
        setUserData(newData)
    }
    const error = () => {
        swal(
            'Sorry!',
            'Your password didnot matched.',
            'error'
        )
    }
    const success = () => {
        swal(
            `Hello ${userData.name}!`,
            'You are successfully sign up!',
            'success'
        )
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (userData?.password1 !== userData?.password2) {
            error()
            return
        } else {
            emailSignUp(userData.email, userData.password1, userData.name, success, navigate)
        }
    }


    return (
        <Box sx={{ backgroundColor: "#f4f4f4" }}>
            <Container >
                <Box sx={{ paddingY: "70px" }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ maxWidth: "600px" }}>
                                <h1> REGISTER NOW</h1>
                                <form onSubmit={handleOnSubmit}>
                                    <TextField
                                        id="standard-basic" label="Full Name"
                                        name='name'
                                        sx={{ width: '55%' }}
                                        onBlur={handleOnBlur} variant="standard"
                                        type="text"
                                        required
                                    />
                                    <TextField
                                        id="standard-basic" label="Email"
                                        name='email'
                                        sx={{ width: '55%' }}
                                        onBlur={handleOnBlur} variant="standard"
                                        type="email"
                                        required
                                    />
                                    <TextField
                                        id="standard-basic" label="Password"
                                        name='password1'
                                        sx={{ width: '55%' }}
                                        onBlur={handleOnBlur} variant="standard"
                                        type="password"
                                        required
                                    />
                                    <TextField
                                        id="standard-basic" label="Confirm Password"
                                        name='password2'
                                        sx={{ width: '55%' }}
                                        onBlur={handleOnBlur} variant="standard"
                                        type="password"
                                        required
                                    />
                                    <input className='submit' style={{ display: "block", margin: "10px auto" }} type='submit' value='Register Now' />
                                </form>
                            </Box>
                            <Box sx={{ marginY: '15px' }}>
                                <span>Already Have an Account?</span> <Link className='link' to='/login'>Sign in</Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: { xs: 'none', md: "inline" } }}>
                                <img style={{ width: '100%' }} src={loginImg} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Register;