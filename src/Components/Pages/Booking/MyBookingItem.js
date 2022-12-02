import React from 'react';
import { Link } from 'react-router-dom';
import DetailsModal from './DetailsModal/DetailsModal';

const MyBookingItem = ({ book, handleDelete }) => {
    const { _id, productName, productPrice,booking_date,payment} = book;
    console.log(book);
    return (
        <tr className='text-xl text-neutral'>
            <td>{productName}</td>
            <td>{productPrice}</td>
            <td>{booking_date}</td>
            <td> <label htmlFor="my-modal-6" className='btn btn-primary'>Details</label></td>
            <td className='flex'>
                {
                    payment=== true ?  <label className='text-success bg-secondary mx-1'>Payed</label>:
                    <Link to={`/payment/${_id}`} className='btn btn-warning mx-1'>Payment</Link>
                }
                <button onClick={() => handleDelete(_id)} className='btn btn-error mx-1'>X</button>
            </td>
            <DetailsModal
                book={book}
            ></DetailsModal>
        </tr>
    );
};

export default MyBookingItem;