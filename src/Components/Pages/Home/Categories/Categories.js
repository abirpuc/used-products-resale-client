import React from 'react';
import UseTitle from '../../../Hooks/Title/UseTile';
import CategoriesItem from './CategoriesItem';

const Categories = () => {
    UseTitle('Category')
    const categories = [
        {
            category_id: "01",
            category_name: "Old Smart Bike",
            img: 'https://s3-eu-west-1.amazonaws.com/crash.net/visordown.com/styles/large/s3/Smart%20old.jpg?itok=4VNu60f0'
        },
        {
            category_id: "02",
            category_name: "Old Normal Bike",
            img: 'https://qph.cf2.quoracdn.net/main-qimg-6a84e3215984cf4ceea870839e5cf1ef-pjlq'
        },
        {
            category_id: "03",
            category_name: "Old Electronics Bike",
            img: 'https://cdn.luxe.digital/media/20220130151643/best-electric-motorcycles-2022-sondors-metacycle-luxe-digital-1-780x520.jpg'
        }
    ]
    return (
        <div className="w-3/4 mx-auto my-10">
            <div className="text-center w-1/2 mx-auto">
                <h1 className='text-4xl text-primary'>Our Products Categories</h1>
                <p className='text-xl text-neutral mt-2'>In this site we seal three categories products and all categories product are used.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10'>
                    {
                        categories.map(category => <CategoriesItem
                            key={category.category_id}
                            category = {category}
                        ></CategoriesItem>)
                    }
            </div>
        </div>
    );
};

export default Categories;