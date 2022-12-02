import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Hooks/Spinner/Spinner';
import MyBookingItem from './MyBookingItem';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [booking, setBooking] = useState([]);
    const [spinner, setSpinner]= useState(false);

    const handleDelete = (id) => {
        const bookingDelete = window.confirm("Are want to delete this")
        if (bookingDelete){
            fetch(`https://used-products-reasel-market-server.vercel.app/booking/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('your delete successfully done!')
                        const remaining = booking.filter(rev => rev._id !== id)
                        setBooking(remaining)
                    }
                })
        }
    }

useEffect(() => {
    setSpinner(true)
    fetch(`https://used-products-reasel-market-server.vercel.app/booking?customerEmail=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setBooking(data)
            setSpinner(false)
        })
}, [user?.email])

return (
    <div>
        <h1 className="text-center text-3xl my-4 text-success">My Booking List</h1>
        <div className="overflow-x-auto w-3/4 mx-auto my-5">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Booking Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booking.map(book => <MyBookingItem
                            key={book._id}
                            book={book}
                            handleDelete={handleDelete}
                        ></MyBookingItem>)
                    }
                </tbody>
            </table>
        </div>
        <div className='text-center'>
            {
                spinner && <Spinner></Spinner>
            }
        </div>
    </div>
);
};

export default MyBooking;