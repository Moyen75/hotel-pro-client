import { Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <Typography variant='h1'>
        Hello <span className='name'> {user?.displayName}</span> <span className='welcome'>welcome back</span>.
    </Typography>
    );
};

export default DashboardHome;