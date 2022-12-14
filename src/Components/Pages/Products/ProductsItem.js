import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseSeller from '../../Hooks/UseSeller';

const ProductsItem = ({ product, setBuy }) => {
    const { img, product_name, seller_email, seller_name, price, description, address, mobile, date,
        sellStatus } = product;
    const { user } = useContext(AuthContext);
    const handlelogin = () => {
        toast.error('please login first')
    }
    return (
        <div>
            <div className="card text-neutral card-compact bg-base-100 shadow-xl">
                <div>
                    <figure className='h-full'><img className='h-full' src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title">{product_name}</h2>
                            <p className='ml-8 text-xl font-bold'>Price:{price}</p>
                            {
                                (sellStatus === true) ? <label className='text-error  p-2 rounded-md'>Sold</label> :
                                    <label className=' text-primary p-2 rounded-md'>Available</label>
                            }
                        </div>
                        <div>
                            <p className='text-2xl'>Description:</p>
                            <p className='text-xl text-neutral indent-2'>{description}</p>
                        </div>
                        <p className='text-xl'>Address: {address}</p>
                        <h1 className='text-xl flex'>
                            Seller Name: {seller_name}
                        </h1>
                        <p className='text-xl'>Contract No: {mobile}</p>
                    </div>
                    <div className="card-actions flex items-center justify-between p-2">
                        <p className='text-bold text-error'>Release Date: {date}</p>
                        {
                            user?.email ?
                                <label onClick={() => setBuy(product)} htmlFor="buy-now" className="btn btn-primary">Buy Now</label> :
                                <button onClick={handlelogin} className="btn btn-primary">Buy Now</button>
                        }
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
            <div>
            </div>
        </div>
    );
};

export default ProductsItem;