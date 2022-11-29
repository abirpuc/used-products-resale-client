import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingModal = ({ buy, setBuy }) => {
    const [error, setError] = useState(null)
    const [date, setDate] = useState(new Date())
    const formatDate = format(date,'PP')
    const { user } = useContext(AuthContext)
    const {_id, product_name, price, seller_name } = buy;

    const handleBooking = (event) => {
        event.preventDefault();

        const form = event.target;

        const sellerName = form.sellername.value;
        const productName = form.productname.value;
        const productPrice = form.productprice.value;
        const customerName = form.customername.value;
        const customerEmail = form.customeremail.value;
        const customerMobile = form.customermobile.value;
        const meetingAddress = form.meetingaddress.value;

        if(customerMobile === null){
            setError('Please Enter Mobile No')
        }

        if(customerMobile.length !== 11){
            toast.error('please Enter a valid Mobile Number');
        }

        const bookingInfo = {
            booking_id: _id,
            sellerName,
            productName,
            productPrice,
            customerName,
            customerEmail,
            customerMobile,
            meetingAddress,
            booking_date: formatDate,
        }

        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('your booking is success')
            setBuy(null)
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <input type="checkbox" id="buy-now" className="modal-toggle" />
            <div className="modal text-neutral">
                <div className="modal-box relative">
                    <label htmlFor="buy-now" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product_name}</h3>
                    {
                        error && <h1 className='text-center text-xl text-danger'>{error}</h1>
                    }
                    <form onSubmit={handleBooking}>
                        <input type="text" name='sellername' defaultValue={seller_name} readOnly hidden className="text-neutral text-xl input input-bordered w-full my-2" />
                        <input type="text" name="productname" defaultValue={product_name} readOnly className="text-neutral text-xl input input-bordered w-full my-2" />
                        <input type="text" name="productprice" defaultValue={price} readOnly className="text-neutral text-xl input input-bordered w-full my-2" />
                        <input type="text" name="customername" defaultValue={user.displayName} readOnly className="text-neutral text-xl input input-bordered w-full my-2" />
                        <input type="text" name="customeremail" defaultValue={user.email} readOnly className="text-neutral text-xl input input-bordered w-full my-2" />
                        <input type="text" name="customermobile" placeholder='Enter your mobile no' className="text-neutral text-xl input input-bordered w-full my-2" />
                        <div>
                            {
                                error && <p className='text-error'>{error}</p>
                            }
                        </div>
                        <textarea name="meetingaddress" className="textarea textarea-bordered text-neutral text-xl my-2 w-full" placeholder="Enter Your meeting address"></textarea>
                        <button className='btn btn-success'>Booking Now</button>
                    </form>
                </div>
                <Toaster></Toaster>
            </div>
        </>
    );
};

export default BookingModal;