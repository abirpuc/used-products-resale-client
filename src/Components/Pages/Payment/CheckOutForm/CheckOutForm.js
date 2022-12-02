import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast, { Toaster } from 'react-hot-toast';

const CheckOutForm = ({data,handlePayment}) => {
    const [cardError,setCardError]= useState('');
    const stripe = useStripe();
    const elements = useElements();
    const {productPrice} = data;

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card,

        });

        if (error) {
            setCardError(error.message)
          }else{
            setCardError('')
          }
    }



    return (
        <form onSubmit={handleSubmit}>
            {
                cardError && <h1 className='text-2xl text-red'>{cardError}</h1>
            }
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#000',
                            '::placeholder': {
                                color: '#000',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button onClick={()=>handlePayment(data._id)} className='btn btn-s btn-primary mt-10' type="submit" disabled={!stripe}>
                Pay
            </button>
            <Toaster></Toaster>
        </form>
    );
};

export default CheckOutForm;