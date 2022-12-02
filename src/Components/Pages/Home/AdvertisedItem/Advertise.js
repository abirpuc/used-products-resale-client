import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Advertise = ({ ad, setBuy }) => {
    const { user } = useContext(AuthContext)
    const handlelogin = () => {
        toast.error('login first')
    }
    return (
        <>
            {
                (ad.advertise && ad.sell_status === true) &&
                <div className="card bg-base-100 shadow-xl">
                    <figure className='h-full'><img className='h-full' src={ad.img} alt="Shoes" /></figure>
                    <div className="card-body text-neutral">
                        <div className='flex items-center justify-between'>
                            <h2 className="card-title">{ad.product_name}</h2>
                            <p className='ml-8 text-xl font-bold'>Price:{ad.price}</p>

                        </div>
                        {
                            (ad.sellStatus === true) ? <label className=' text-primary rounded-md'>Available</label> : <label className=' text-error rounded-md'>Sold</label>

                        }
                        <div>
                            <p className='text-2xl'>Description:</p>
                            <p className='text-xl text-neutral indent-2'>{ad.description}</p>
                        </div>
                        <p className='text-xl'>Address: {ad.address}</p>
                        <h1 className='text-xl flex'>
                            Seller Name: {ad.seller_name}
                        </h1>
                        <p className='text-xl'>Contract No: {ad.mobile}</p>
                    </div>
                    <div className="card-actions flex items-center justify-between p-2">
                        <p className='text-bold text-error'>Release Date: {ad.date}</p>
                        {
                            user?.email ?
                                <label onClick={() => setBuy(ad)} htmlFor="buy-now" className="btn btn-primary">Buy Now</label> :
                                <button onClick={handlelogin} className="btn btn-primary">Buy Now</button>
                        }
                    </div>
                    <Toaster></Toaster>
                </div>

            }
        </>
    );
};

export default Advertise;

// onClick={() => setBuy(product)} 
