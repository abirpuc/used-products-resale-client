import React from 'react';

const CategoriesItem = ({category}) => {
    const {category_id,category_name,img} = category;
    return (
        <div className="card card-compact bg-secondary shadow-xl">
            <figure className='w-full h-full'><img src={img} alt="Shoes" className='h-full'/></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl text-primary">{category_name}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Products</button>
                </div>
            </div>
        </div>
    );
};

export default CategoriesItem;