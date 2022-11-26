import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../Login/Login';
import './Banner.css';
const Banner = () => {   
    return (
        <div className="w-full h-[600px] relative ">
            <img className='h-full w-full' src="https://images.unsplash.com/photo-1635798461201-86f49f8cfcac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW90b3JjeWNsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className='text-white absolute w-1/2 top-10 left-1/4 text-center'>
                <div >
                    <h1 className='text-4xl text-white font-bold'>Old is Gold</h1>
                    <p className='text-2xl text-white'>if search a good motorcycle with reasonable price. We think a good old bike waiting for you</p>
                </div>
                <div className='grid lg:grid-cols-2 gap-2 grid-cols-1 mt-3 w-1/2 mx-auto'>
                    <button className='btn text-center btn-info'><Link to="/singup">Register</Link></button>
                    <button className='btn text-center btn-info'><Link to="/login">Login</Link></button>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;

// img-gradient