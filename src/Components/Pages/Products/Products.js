import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UseTitle from '../../Hooks/Title/UseTile';
import ProductsItem from './ProductsItem';

const Products = () => {
    const [products, setProducts] = useState([]);
    UseTitle('Products')
    
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='mt-50 '>
            <div className='grid lg:grid-cols-3 md: gid:-cols-2 sm:grid-rows-1 gap-3'>
                {
                    products.map(product => <ProductsItem
                        key={product._id}
                        product={product}
                    ></ProductsItem>)
                }
            </div>
        </div>
    );
};

export default Products;