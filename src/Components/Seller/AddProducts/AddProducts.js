import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/Title/UseTile';

const AddProducts = () => {
    UseTitle('add-product')
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const date = new Date()
    const formatDate = format(date, 'PP')

    const [categories, setCategory] = useState([])

    useEffect(() => {
        fetch('https://used-products-reasel-market-server.vercel.app/category')
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }, [])

    const handleProduct = (event) => {
        event.preventDefault();

        const form = event.target;

        const productName = form.productname.value;
        const productPrice = form.productprice.value;
        const category = form.productcategory.value;
        const productCondition = form.productcondition.value;
        const mobileNo = form.mobileno.value;
        const usedTime = form.usedtime.value;
        const location = form.location.value;
        const img = form.img.value;
        const description = form.description.value;
        const sell_status = true;

        const productInfo = {
            seller_email: user.email,
            seller_name: user.displayName,
            date: formatDate,
            product_name: productName,
            price: productPrice,
            category_id:category,
            description,
            address:location,
            img,
            used:usedTime,
            condition:productCondition,
            mobile:mobileNo,
            sell_status: sell_status
        }
        fetch('https://used-products-reasel-market-server.vercel.app/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged
                ){
                toast.success('your product added successfully');
                navigate('/myproducts')
            }
        })
        .catch(err=>console.log(err.message))
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

export default AddProducts;