import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Booking from '../Booking/Booking';
import MenuItems from '../MenuItems/MenuItems';
import Order from '../Order/Order';
import Types from '../Types/Types';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <MenuItems></MenuItems>
            <Booking></Booking>
            <Types></Types>
            <Blog></Blog>
        </div>
    );
};

export default Home;