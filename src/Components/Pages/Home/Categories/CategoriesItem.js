import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesItem = ({category}) => {
    const {category_id,category_name,img} = category;
    return (
        <div className="card card-compact bg-secondary shadow-xl">
            <figure className='w-full h-full'><img src={img} alt="Shoes" className='h-full'/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-primary">{category_name}</h2>
                <div className="card-actions justify-end">
                    <Link to={`/category/${category_id}`}><button className="btn btn-primary">See Products</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoriesItem;