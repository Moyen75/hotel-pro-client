import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../../pages/Home/Navigation/Navigation';


const drawerWidth = 240;

function Dashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>

            <Toolbar sx={{ backgroundColor: '#00458dd1' }} />
            <List sx={{ backgroundColor: '#00458dd1', minHeight: '89vh', textAlign: "left", display: 'flex', justifyContent: 'center' }} >

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <NavLink className=' dash-link' to='/dashboard'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        Dashboard
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/userOrders'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="fab fa-shopify"></i>   My Orders
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/rate'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="far fa-smile"></i>   Rate us
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/cart'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="fas fa-cart-plus"></i>  My cart
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/billing'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="fas fa-shopping-bag"></i>  Billing & shipping info
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/payment'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="fas fa-history"></i>  order & payment history
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/userOrders'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="far fa-user"></i>  profile
                    </NavLink>
                    <NavLink className=' dash-link' to='/dashboard/makeAdmin'
                        sx={{ my: 2, display: 'block', color: 'gray' }}
                    >
                        <i class="far fa-user"></i>  Make Admin
                    </NavLink>
                </Box>

            </List>
            <Divider />

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <AppBar
                    position="fixed"

                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` }
                    }}
                >


                    <Navigation></Navigation>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of . */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>



                <Outlet></Outlet>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
