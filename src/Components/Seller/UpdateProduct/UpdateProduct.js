import React, { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateProduct = () => {
    const [categories, setCategory] = useState([])
    const [updateProduct, setUpdateProduct] = useState([]);
    const {_id,product_name,} = useLoaderData();
    console.log(product_name);

    // useEffect(() => {
    //     fetch('http://localhost:5000/myproductsupdate/')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategory(data)
    //         })
    // }, [])
   

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])

    const handleProduct = (event) =>{

    }

    return (
        <div>
        <h1 className='text-center my-10 text-4xl text-neutral font-semibold'>Add a Product</h1>
        <form onSubmit={handleProduct} className='text-center bg-secondary rounded-lg p-4 text-neutral w-1/2 mx-auto my-5'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Product Name</span>
                    </label>
                    <input type="text" name="productname" placeholder="Type here" className="input input-bordered w-full" required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Product Price</span>
                    </label>
                    <input type="text" name="productprice" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Category</span>
                    </label>
                    <select name='productcategory' className="select select-bordered w-full" required>
                        <option disabled selected>select your category</option>
                        {
                            categories.map(cat =>
                                <option key={cat._id} value={cat.category_id}>{cat.category_name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Product Condition</span>
                    </label>
                    <select name="productcondition" className="select select-bordered w-full" required>
                        <option disabled selected>select product condition</option>
                        <option value="Excellent">Excellent</option>
                        <option value="Good">Good</option>
                        <option value="Fine">Fine</option>
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Mobile NO</span>
                    </label>
                    <input type="text" name="mobileno" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Used Time</span>
                    </label>
                    <input type="text" name="usedtime" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
            </div>
            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text text-xl text-neutral">Location</span>
                    </label>
                    <input type="text" name="location" placeholder="Type here" className="input input-bordered w-full " required />
                </div>
            <div className="form-control w-full">
                <label className="label">
                    <span className="label-text text-xl text-neutral">Image</span>
                </label>
                <input type="text" name="img" placeholder="Type here" className="input input-bordered w-full " required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-neutral text-xl">Description</span>
                </label>
                <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="write product description"></textarea>
            </div>
            <button className='btn btn-info text-white mt-4'>Add Product</button>
        </form>
        <Toaster></Toaster>
    </div>
    );
};

export default UpdateProduct;