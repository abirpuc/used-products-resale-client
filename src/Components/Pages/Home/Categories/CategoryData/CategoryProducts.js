import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductsItem from '../../../Products/ProductsItem';

const CategoryProducts = () => {
    const products = useLoaderData()
    // const [products, setProducts] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[])
    return (
        <div>
            <h1 className='text-center my-3 text-4xl text-info'>{products.length} Available for Bike Seal</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    products.map(product => <ProductsItem
                        key={product._id}
                        product = {product}
                    ></ProductsItem>)
                }
            </div>
        </div>
    );
};

export default CategoryProducts;