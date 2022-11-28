import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/Title/UseTile';


const Login = () => {
    UseTitle('Login-page')
    const {singin,singinWithGoogle} = useContext(AuthContext)
    const handleForm =(event)=>{
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        singin(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch()
    }

    return (
        <div className='w-3/4 mx-auto'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt=""/>
                    </div>
                    <div className='w-1/2'>
                        <form onSubmit={handleForm} className='px-5'>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text text-2xl text-neutral">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input text-neutral input-bordered w-full " />
                            </div>
                            <div className="form-control w-full text-neutral">
                                <label className="label">
                                    <span className="label-text text-neutral text-2xl">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="text-neutral input input-bordered w-full " />
                                <label className="label">
                                    <span className="label-text-alt">forgatepasword?</span>
                                </label>
                            </div>
                            <div className="text-center my-4">
                                <button className='btn btn-primary w-1/2 mx-auto'>Login</button>
                            </div>
                        </form>
                        <div className='my-4 text-center text-xl text-neutral'>
                            <p>If are not an Account?<span className='text-success'><Link to="/singup">Create a new Account</Link></span></p>
                        </div>
                        <div className='lg:grid lg:grid-cols-1 lg:gap-4'>
                            <button onClick={singinWithGoogle} className='btn btn-error lg:w-1/2 sm:w-full mx-auto'>
                                <FaGoogle className='text-accent text-xl mr-2'></FaGoogle>
                                Login with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;