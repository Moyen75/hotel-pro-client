import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import Booking from '../Booking/Booking';
import Footer from '../Footer/Footer';
import MenuItems from '../MenuItems/MenuItems';
import Order from '../Order/Order';
import Types from '../Types/Types';
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner></Banner>
            <Order></Order>
            <MenuItems></MenuItems>
            <Booking></Booking>
            <Types></Types>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;