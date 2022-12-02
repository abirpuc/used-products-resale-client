import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/Title/UseTile';
import MyProductsItem from './MyProductsItem';

const MyProducts = () => {
    UseTitle('My-Products')
    const { user } = useContext(AuthContext);
    const [products, setProduct] = useState([]);
    const [spinner,setSpinner] = useState(false);

    useEffect(() => {
        setSpinner(true)
        fetch(`https://used-products-reasel-market-server.vercel.app/myproducts?seller_email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setSpinner(false)
            })
    }, [user?.email])

    const handleDelete = id =>{
        const productDelete = window.confirm("Are want to delete this")
        if (productDelete){
            fetch(`https://used-products-reasel-market-server.vercel.app/myproducts/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('your delete successfully done!')
                        const remaining = products.filter(rev => rev._id !== id)
                        setProduct(remaining)
                      
                    }
                })
        }
    }

    const handleAdvertise = id =>{
        fetch(`https://used-products-reasel-market-server.vercel.app/myproducts/${id}`,{
            method:"PUT"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }



    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                {
                    products.map(product => <MyProductsItem
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}
                        handleAdvertise={handleAdvertise}
                        spinner={spinner}
                    ></MyProductsItem>)
                }
            </div>
        </div>
    );
};

export default MyProducts;

