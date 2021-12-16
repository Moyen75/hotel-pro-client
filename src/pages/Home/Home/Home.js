import React from 'react';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import MenuItems from '../MenuItems/MenuItems';
import Navigation from '../Navigation/Navigation';
import Order from '../Order/Order';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Order></Order>
            <MenuItems></MenuItems>
            <Booking></Booking>
        </div>
    );
};

export default Home;