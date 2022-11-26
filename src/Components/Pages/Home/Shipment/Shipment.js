import React from 'react';
import { FaMapMarkerAlt, FaPhoneVolume } from "react-icons/fa";

const Shipment = () => {
    return (
        <div className='my-10 w-3/4 mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
            <div className="card card-side bg-secondary shadow-xl flex">
                <div className='text-primary text-8xl mt-10'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                </div>
                <div className="card-body">
                    <h2 className="text-primary card-title text-2xl">Shipment</h2>
                    <p className='text-primary text-xl'>Shipment select buyers and seller flexible location</p>
                </div>
            </div>
            <div className="card card-side bg-secondary shadow-xl flex">
                <div className='text-primary text-8xl mt-10'>
                    <FaPhoneVolume></FaPhoneVolume>
                </div>
                <div className="card-body">
                <h2 className="text-primary card-title text-2xl">Contact with us</h2>
                    <p className='text-primary text-xl'>Phone: +88015500998</p>
                    <p className='text-primary text-xl'>Email: resalemarket@gmail.com</p>
                </div>
            </div>
            
        </div>
    );
};

export default Shipment;