import React from 'react';
import UseTitle from '../../../Hooks/Title/UseTile';
import Banner from '../Banner/Banner';

const Home = () => {
    UseTitle('resale-HomePage')
    return (
        <div>
           <Banner></Banner>
        </div>
    );
};

export default Home;