import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/Title/UseTile';

const SingUp = () => {
    UseTitle('registration page')
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src="https://sssonline.org/wp-content/uploads/2019/04/sss-online-registration-form.jpg" alt="" />
                    </div>
                    <div className='w-1/2'>
                        <form className='px-5'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Name</span>
                                </label>
                                <input type="text" placeholder="Type here" className="input text-neutral input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input text-neutral input-bordered w-full " />
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Mobile</span>
                                </label>
                                <input type="text" placeholder='mobile no' className='input text-neutral input-bordered w-full' />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Registration For</span>
                                </label>
                                <select className="select select-bordered text-neutral">
                                    <option>User</option>
                                    <option>Seller</option>
                                    <option>Admin</option>
                                </select>
                            </div>
                            <div className="form-control w-full text-neutral">
                                <label className="label">
                                    <span className="label-text text-neutral text-2xl">Password</span>
                                </label>
                                <input type="password" placeholder="Type here" className="text-neutral input input-bordered w-full " />
                            </div>
                            <div className="text-center my-4">
                                <button className='btn btn-primary w-1/2 mx-auto'>Sing Up</button>
                            </div>
                        </form>
                        <div className='my-4 text-center text-xl text-neutral'>
                            <p>Already have an account?<span className='text-success'><Link to="/singup">go for Login</Link></span></p>
                        </div>
                        <div className='grid grid-cols-1 gap-4'>
                            <button className='btn btn-error w-1/2 mx-auto'>
                                <FaGoogle className='text-accent text-xl mr-2'></FaGoogle>
                                SingUp with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;