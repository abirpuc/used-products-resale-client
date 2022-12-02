import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Spinner from '../../Hooks/Spinner/Spinner';

const MyProductsItem = ({ product, handleDelete, handleAdvertise, spinner }) => {
    const { _id, condition, product_name, seller_email, price, img, description, address, seller_name, mobile, date, sellStatus } = product;
    const [updateSellStatus, setSellStatus] = useState(false);
    const handleSellStatus = (id) => {
        const changeStatus = !sellStatus;
        const updateInfo = {
            product_name,
            seller_email,
            price,
            img,
            description,
            address,
            seller_name,
            mobile,
            date,
            condition,
            sellStatus: changeStatus
        }
        console.log(updateSellStatus, updateInfo);
        fetch(`http://localhost:5000/products/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                setSellStatus(!updateSellStatus)
                toast.success('your status is update! please reload')
            })

    }

    return (
        <>
        {
            spinner &&  <Spinner></Spinner>
        }
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
                    <h1 className='text-xl flex'>
                        Seller Name: {seller_name}
                        <FaCheckCircle className='text-info'></FaCheckCircle>

                    </h1>
                    <p className='text-xl'>Contract No: {mobile}</p>
                </div>
                <p className='text-bold text-error ml-5'>Release Date: {date}</p>
                <div className="card-actions flex items-center justify-evenly p-2">
                    {
                        (sellStatus === true) ? <button onClick={() => handleSellStatus(_id)} className='btn btn-primary'>Available</button>
                            :
                            <button onClick={() => handleSellStatus(_id)} className='btn btn-success'>Sold</button>
                    }
                    {
                        product?.advertise ? <></> : <button onClick={() => handleAdvertise(_id)} className='btn btn-warning'>Advertise</button>
                    }
                    <button onClick={() => handleDelete(_id)} className='btn btn-error'>Delete</button>
                </div>
                <Toaster></Toaster>
            </div>
        </>
    );
};

export default MyProductsItem;

