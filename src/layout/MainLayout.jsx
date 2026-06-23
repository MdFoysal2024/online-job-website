import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>


            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;
