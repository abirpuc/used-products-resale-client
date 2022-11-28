import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabvar from '../Pages/Shared/Header/Nabvar';
import LeftSideNab from '../Pages/Shared/LeftSideNav/LeftSideNab';

const CategoryLayout = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <div className='px-12 flex'>
                <div className='w-60 block my-10'>
                    <LeftSideNab></LeftSideNab>
                </div>
                <div className='w-full ml-10 my-10'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CategoryLayout;