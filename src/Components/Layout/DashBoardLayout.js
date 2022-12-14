import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
import Footer from '../Pages/Shared/Footer/Footer';
import Nabvar from '../Pages/Shared/Header/Nabvar';
import LeftSideNab from '../Pages/Shared/LeftSideNav/LeftSideNab';

const DashBoardLayout = () => {
    const {user}= useContext(AuthContext)
    const[isAdmin] = UseAdmin(user?.email)
    return (
        <div>
            <Nabvar></Nabvar>
            <div className="drawer drawer-mobile text-neutral">
                <input id="dashboard-sidenav" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side text-neutral">
                    <label htmlFor="dashboard-sidenav" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-secondary text-neutral">
                        <li><Link to="/dashboard/allseller">ALL Seller</Link></li>
                        <hr/>
                        <li><Link to="/dashboard/allcustomer">ALL Buyer</Link></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;