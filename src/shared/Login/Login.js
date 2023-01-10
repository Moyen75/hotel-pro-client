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
import { useEffect } from 'react';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const { googleSignIn, emailSignIn } = useAuth()
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        if (err) {
            swal(
                'ooppps!',
                'Invalid email!',
                'error'
            )
            setErr(false)
            setEmail("")
        }
    }, [err])
    const handleEmail = e => {
        const email = e.target.value;
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(mailformat)) return setErr(true)
        setEmail(e.target.value)

    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        console.log(email, password)
        // emailSignIn(email, password, success, navigate, location)
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
                    <div className="login-content">

                        <div className="login-form">
                            <h3 className="login-logo">
                                <i class="fa-solid fa-key"></i>
                            </h3>
                            <h2>sign in</h2>
                            <div className="input-box">
                                <input onBlur={handleEmail} name="email" type="text" required />
                                <i class="fa-solid fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <input onBlur={handlePassword} name="password" type="password" required />
                                <i class="fa-solid fa-lock"></i>
                                <span>password</span>
                            </div>
                            <div className="login-links">
                                <a href="#">Forgot Password <i class="fa-solid fa-question"></i></a>
                                <a href="#">Sign up <i class="fa-solid fa-user-plus"></i></a>
                            </div>
                            <div className="input-box">
                                <input type="submit" onClick={handleOnSubmit} value="Signin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Login;