import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link,} from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/Title/UseTile';

const SingUp = () => {
    const [error,setError] = useState(null);

    UseTitle('registration page')
    const {singup} = useContext(AuthContext)

   

    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const mobile = form.mobile.value;
        const userType = form.usertype.value;
        const password = form.password.value;
        const photoURL = form.photourl.value;

        const userInfo = {
            name:name,
            email:email,
            mobile:mobile,
            userType:userType,
            password:password,
            photoURL:photoURL
        }

        console.log(name,email,password,photoURL,userType,mobile);
        console.log(name,userInfo);
        singup(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            toast.success("Your registration successfully")
        })
        .catch(err => {
            toast.error('this email already register')
        })

    }
    return (
        <div className='w-3/4 mx-auto my-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src="https://sssonline.org/wp-content/uploads/2019/04/sss-online-registration-form.jpg" alt="" />
                    </div>
                    <div className='w-1/2'>
                        {
                            error && <h1 className='text-2xl text-center text-error'>{error}</h1>
                        }
                        <form onSubmit={handleForm} className='px-5'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input text-neutral input-bordered w-full " required/>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input text-neutral input-bordered w-full " required/>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Mobile</span>
                                </label>
                                <input type="text" name="mobile" placeholder='mobile no' className='input text-neutral input-bordered w-full' required/>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Registration For</span>
                                </label>
                                <select name="usertype" className="select select-bordered text-neutral required">
                                    <option value="user">User</option>
                                    <option value="seller">Seller</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="form-control w-full text-neutral">
                                <label className="label">
                                    <span className="label-text text-neutral text-2xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Type here" className="text-neutral input input-bordered w-full " required/>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Profile Picture</span>
                                </label>
                                <input type="text" name="photourl" placeholder='photo' className='input text-neutral input-bordered w-full' required/>
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
            <Toaster></Toaster>
        </div>
    );
};

export default SingUp;