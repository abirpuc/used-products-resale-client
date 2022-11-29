import React from 'react';

const MyBookingItem = ({book}) => {
    const {_id,productName,productPrice} = book;
    console.log(book);
    return (
        <tr className='text-xl text-neutral'>
            <td>{productName}</td>
            <td>{productPrice}</td>
            <td> <button className='btn btn-primary'>Details</button></td>
            <td className='flex'>
                <button className='btn btn-success mx-1'>Payment</button>
                <button className='btn btn-error mx-1'>X</button>
            </td>
        </tr>
    );
};

export default MyBookingItem;