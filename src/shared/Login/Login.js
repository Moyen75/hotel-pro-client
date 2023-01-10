import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import loginImg from '../../images/others/undraw_secure_login_pdn4.png'
import google from '../../images/others/google.png'
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../../pages/Home/Footer/Footer';


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
        <Box sx={{ backgroundColor: "#cfd1e1", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-cover"></div>
                    <div className="login-shadow"></div>
                    <div className="link-content">
                        <div className="link-form">
                            <h3 className="link-logo"></h3>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Login;