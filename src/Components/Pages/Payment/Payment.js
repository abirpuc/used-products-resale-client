import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm/CheckOutForm';

const Payment = () => {
    const data = useLoaderData();
    const[payment,setPayment] = useState(false);
    const { productName, productPrice, booking_date} = data;
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
    const handlePayment = id =>{
        setPayment(true)
    }
    return (
        <div className="w-1/2 mx-auto mt-28">
            <h1 className='text-neutral text-4xl'>payment for: {productName}</h1>
            <p className='text-neutral text-info text-2xl mt-1'>Price: {productPrice}, BookingDate: {booking_date}</p>
            <div>
                <div className="AppWrapper mt-5 text-neutral text-2xl">
                    <Elements stripe={stripePromise} >
                        <CheckOutForm 
                            data={data}
                            handlePayment={handlePayment}
                        />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;