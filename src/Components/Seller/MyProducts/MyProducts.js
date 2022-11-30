import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/Title/UseTile';
import MyProductsItem from './MyProductsItem';

const MyProducts = () => {
    UseTitle('My-Products')
    const { user } = useContext(AuthContext);
    const [products, setProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myproducts?seller_email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [user?.email])
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    products.map(product => <MyProductsItem
                        key={product._id}
                        product={product}
                    ></MyProductsItem>)
                }
            </div>
        </div>
    );
};

export default MyProducts;

