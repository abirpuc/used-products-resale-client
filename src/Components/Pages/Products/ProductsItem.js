import React from 'react';

const ProductsItem = ({ product }) => {
    const { _id, img, product_name, seller_name, price, description, address, mobile, date } = product
    return (
        <div>
            <div className="card text-neutral card-compact bg-base-100 shadow-xl">
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
                    <div className='text-bold flex items-center justify-around'>
                    <h1>Seller Name: {seller_name}</h1>
                    <p>Contract No: {mobile}</p>
                    </div>
                    <div className="card-actions flex items-center justify-between">
                        <p className='text-bold'>Release Date: {date}</p>
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsItem;