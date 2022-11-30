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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-white text-2xl'>
                            <th className='w-1/4'>Product Name</th>
                            <th className='w-1/4'>Price</th>
                            <th className='w-1/4'>Advertise</th>
                            <th className='w-1/4'></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        products.map(product => <MyProductsItem
                            key={product._id}
                            product = {product}
                        ></MyProductsItem>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;