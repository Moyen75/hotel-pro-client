import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    let location = useLocation();

    if (loading) {
        return <CircularProgress />;
    }
     if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;


};

export default PrivateRoute;