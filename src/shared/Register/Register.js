import { Box } from '@mui/system';
import React, { useState } from 'react';
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
        console.log(userData)
        emailSignUp(userData.email, userData.password, userData.name, success, navigate)
    }


    return (
        <Box sx={{ backgroundColor: "#cfd1e1", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <div className="login-container">
                <div className="login-box">
                    <div className="login-cover"></div>
                    <div className="login-shadow"></div>
                    <div className="login-content">

                        <div className="login-form">
                            {
                                error && <p className='error'>{error}</p>
                            }
                            <h3 className="login-logo">
                                <i className="fa-solid fa-key"></i>
                            </h3>
                            <h2>sign up</h2>
                            <div className="input-box">
                                <input onBlur={handleOnBlur} name="name" type="text" required />
                                <i class="fa-solid fa-envelope"></i>
                                <span>Full name</span>
                            </div>
                            <div className="input-box">
                                <input onBlur={handleOnBlur} name="email" type="text" required />
                                <i class="fa-solid fa-envelope"></i>
                                <span>Email</span>
                            </div>
                            <div className="input-box">
                                <input onChange={handleOnBlur} name="password" type="password" required />
                                <i class="fa-solid fa-lock"></i>
                                <span>password</span>
                            </div>
                            <div className="login-links">
                                <span>Have an account <i class="fa-solid fa-question"></i></span> <span><Link to="/login"> Sign in <i class="fa-solid fa-user-plus"></i></Link></span>
                            </div>
                            <div className="input-box">
                                <input type="submit" onClick={handleOnSubmit} value="Sign up" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default Register;