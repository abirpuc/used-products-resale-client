import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyBookingItem from './MyBookingItem';

const MyBooking = () => {
    const {user}= useContext(AuthContext)
    const [booking,setBooking] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/booking?customerEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[user?.email])

    return (
        <div>
            <h1 className="text-center text-3xl my-4 text-success">My Booking List</h1>
            <div className="overflow-x-auto w-3/4 mx-auto my-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map(book => <MyBookingItem
                                key={book._id}
                                book={book}
                            ></MyBookingItem>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;