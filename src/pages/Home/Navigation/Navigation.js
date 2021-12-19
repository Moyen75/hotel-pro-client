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
        <Box sx={{ backgroundColor: '#d9edf78f' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#d9edf78f', color: 'gray', boxShadow: 'none', border: 'none' }}>
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
                                    <Link className='link links' to='/menus'
                                        sx={{ my: 2, display: 'block', color: 'gray' }}
                                    >
                                        OUR MENUS
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
                                        <i class="fas fa-cart-plus"></i>
                                    </Link>


                                </Box>
                            </Box>
                            {user.email ? <Box sx={{ flexGrow: 0 }}>
                                <Tooltip>
                                    {
                                        user.photoURL ? <Avatar alt='new' src={user.photoURL} /> : <Box sx={{ display: "flex", justifyContent: 'center' }}>
                                            <Typography>
                                                {user.displayName ? user.displayName : user.email}
                                            </Typography>
                                            <Avatar alt='new'  ><i class="far fa-user"></i></Avatar>
                                        </Box>
                                    }
                                </Tooltip>

                            </Box> :
                                <Link className='link links' to='/login'
                                    sx={{ my: 2, display: 'block', color: 'gray' }}
                                >
                                    log in
                                </Link>}
                            {user.email && <button className='log-out' onClick={logOut} style={{ margin: '0 2px' }}>log out</button>}
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </Box>
    );
};

export default Navigation;