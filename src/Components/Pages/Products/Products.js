import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Spinner from '../../Hooks/Spinner/Spinner';
import UseTitle from '../../Hooks/Title/UseTile';
import UseUser from '../../Hooks/UseUser';
import BookingModal from './BookingModal/BookingModal';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [sellerUser, setSellerUser] = useState([])
    UseTitle('Products')

    const [buy, setBuy] = useState(null);

    useEffect(() => {
        setSpinner(true)
        fetch('https://used-products-reasel-market-server.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setSpinner(false)
            })
    }, [])

    useEffect(() => {
        fetch('https://used-products-reasel-market-server.vercel.app/users/seller')
            .then(res => res.json())
            .then(data => {
                setSellerUser(data)
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
            <div className='text-center ml-1/2'>
               {
                spinner &&  <Spinner></Spinner>
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