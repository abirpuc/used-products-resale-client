import React from 'react';

const MyProductsItem = ({ product }) => {
    console.log(product);
    const { _id, product_name, price,img,description,address,seller_name,mobile,date } = product
    return (
        <div className="card bg-base-100 shadow-xl text-neutral">
            <figure className='h-full'><img className='h-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title">{product_name}</h2>
                    <p className='ml-8 text-xl font-bold'>Price:{price}</p>
                </div>
                <div>
                    <p className='text-2xl'>Description:</p>
                    <p className='text-xl text-neutral indent-2'>{description}</p>
                </div>
                <p className='text-xl'>Address: {address}</p>
                <h1 className='text-xl'>Seller Name: {seller_name}</h1>
                <p className='text-xl'>Contract No: {mobile}</p>
            </div>
            <p className='text-bold text-error ml-5'>Release Date: {date}</p>
            <div className="card-actions flex items-center justify-evenly p-2">
                <button className='btn btn-primary'>Update</button>
                <button className='btn btn-warning'>Advertise</button>
                <button className='btn btn-error'>Delete</button>
            </div>
        </div>
    );
};

export default MyProductsItem;

