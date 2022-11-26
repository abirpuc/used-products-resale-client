import React from 'react';
import UseTitle from '../../../Hooks/Title/UseTile';
import AdvertisedItem from '../AdvertisedItem/AdvertisedItem';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Shipment from '../Shipment/Shipment';

const Home = () => {
    UseTitle('resale-HomePage')
    return (
        <div>
           <Banner></Banner>
           <AdvertisedItem></AdvertisedItem>
           <Shipment></Shipment>
           <Categories></Categories>
        </div>
    );
};

export default Home;