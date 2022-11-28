import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNab = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='hidden sm:block mt-50 card shadow-xl bg-base-100'>
            <h1 className='text-xl text-center text-primary p-4 '>Products Category</h1>
                <ul className='mb-5'>
                    {
                        category.map(cat =>
                            <li className='w-full mt-2 bg-info text-center text-accent rounded text-xl' key={cat.category_id}>
                                <Link to={`/category/${cat.category_id}`}>{cat.category_name}</Link>
                            </li>
                        )
                    }
                </ul>
        </div>
    );
};

export default LeftSideNab;