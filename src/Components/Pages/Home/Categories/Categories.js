import React, { useEffect, useState } from 'react';
import Spinner from '../../../Hooks/Spinner/Spinner';
import UseTitle from '../../../Hooks/Title/UseTile';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
    const [spinner, setSpinner] = useState(false)
    UseTitle('Category')
    const [categories, setCategory] = useState([])
    useEffect(() => {
        setSpinner(true)
        fetch('https://used-products-reasel-market-server.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
                setSpinner(false)
            })
    }, [])
    return (
        <div className="w-3/4 mx-auto my-10">
            <div className="text-center w-1/2 mx-auto">
                <h1 className='text-4xl text-primary'>Our Products Categories</h1>
                <p className='text-xl text-neutral mt-2'>In this site we seal three categories products and all categories product are used.</p>
            </div>
            <div className='text-2xl text-center'>
                {
                    spinner && <Spinner></Spinner>
                }
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                {
                    categories.map(category => <CategoriesItem
                        key={category.category_id}
                        category={category}
                    ></CategoriesItem>)
                }
            </div>
        </div>
    );
};

export default Categories;