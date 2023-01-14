import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const { user, logOut } = useAuth()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <Box sx={{ backgroundColor: '#00458dd1' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#53585b ', color: 'gray', boxShadow: 'none', border: 'none' }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>


                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ color: 'grey' }} textAlign="center">
                                            Home
                                        </Typography>
                                    </MenuItem>


                                </Menu>
                            </Box>

                            <Box sx={{ marginX: 'auto' }}>
                                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                                    <Link className='link links' to='/'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        HOME
                                    </Link>
                                    <Link className='link links' to='/dashboard'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        DASHBOARD
                                    </Link>
                                    <Link className='link links' to='/breakfast'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        BREAKFAST ITEMS
                                    </Link>
                                    <Link className='link links' to='/launch'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        LAUNCH ITEMS
                                    </Link>
                                    <Link className='link links' to='/dinner'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        DINNER ITEMS
                                    </Link>
                                    <Link className='link links' to='/contact'
                                        sx={{ my: 2, display: 'inline-block', color: 'gray' }}
                                    >
                                        CONTACT US
                                    </Link>
                                    <Link className='link links' to='/cart'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        <i className="fas fa-cart-plus"></i>
                                    </Link>


                                </Box>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>{user.email ?
                                <Tooltip>
                                    {
                                        user.photoURL ? <Avatar alt='new' src={user.photoURL} /> : <Avatar alt='new'  ><i className="far fa-user"></i></Avatar>
                                    }
                                </Tooltip> : <Link className='link sign-in' to='/login'
                                    sx={{ my: 2, display: 'block', color: 'tomato' }}
                                >
                                    Log in
                                </Link>}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </Box >
    );
};

export default Navigation;