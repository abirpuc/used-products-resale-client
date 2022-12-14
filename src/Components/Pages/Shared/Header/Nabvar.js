import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/resale.png'
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import UseAdmin from '../../../Hooks/UseAdmin';
import UseSeller from '../../../Hooks/UseSeller';

const Nabvar = () => {

    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = UseAdmin(user?.email)
    const [isSeller] = UseSeller(user?.email)
    // const {displayName,photoURL,phoneNumber
    // } = user;
    const menuItems = <>
        <li className='text-xl text-neutral font-semibold'><Link to="/">Home</Link></li>
        <li className='text-xl text-neutral font-semibold'><Link to="/products">Products</Link></li>
        <li className='text-xl text-neutral font-semibold'><Link to="/blog">Blog</Link></li>
        {
            isAdmin && <>
                <li className='text-xl text-neutral font-semibold'><Link to="/dashboard">Dashboard</Link></li>
                
            </>
        }
        {
            isSeller && <>
                <li className='text-xl text-neutral font-semibold'><Link to="/addproduct">Add Product</Link></li>
                <li className='text-xl text-neutral font-semibold'><Link to="/myproducts">My Product</Link></li>
            </>
        }
        {
            user?.email ?
                <>
                    <li className='text-xl text-neutral font-semibold'><Link to="/mybooking">My Booking</Link></li>
                    <li className='text-xl text-neutral font-semibold'><Link onClick={logout}>Logout</Link></li>
                </>
                :
                <li className='text-xl text-neutral font-semibold'><Link to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="bg-secondary">
            <div className='navbar w-11/12 mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menuItems
                            }
                        </ul>
                    </div>
                    <Link to="/"><img className='h-16' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.email && <img src={user?.photoURL} title={user?.displayName} alt='' />
                            }
                        </div>
                    </label>
                </div>
                <label htmlFor="dashboard-sidenav" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Nabvar;