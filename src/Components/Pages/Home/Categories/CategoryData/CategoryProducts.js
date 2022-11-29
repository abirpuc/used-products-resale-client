import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../Products/BookingModal/BookingModal';
import ProductsItem from '../../../Products/ProductsItem';

const CategoryProducts = () => {
    const products = useLoaderData()
    const [buy, setBuy] = useState(null);
    return (
        <div>
            <h1 className='text-center my-3 text-4xl text-info'>{products.length} Available for Bike Seal</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    products.map(product => <ProductsItem
                        key={product._id}
                        product={product}
                        setBuy={setBuy}
                    ></ProductsItem>)
                }
            </div>
            {
                buy && <BookingModal
                    setBuy={setBuy}
                    buy={buy}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryProducts;