import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/Title/UseTile';
import BookingModal from './BookingModal/BookingModal';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [products, setProducts] = useState([]);
    UseTitle('Products')

    const [buy, setBuy] = useState(null);
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    return (
        <div className='mt-50 '>
            <div className='grid lg:grid-cols-3 md: gid:-cols-2 sm:grid-rows-1 gap-3'>
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

export default Products;