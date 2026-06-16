import React from 'react';
import Home from '../pages/Home/Home';
import { Outlet } from 'react-router-dom';
import Navber from '../pages/Shared/Navber';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>


            <Navber></Navber>
            <Outlet></Outlet>

        </div>
    );
}

export default MainLayout;
