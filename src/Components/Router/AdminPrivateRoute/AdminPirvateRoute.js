import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Hooks/Spinner/Spinner';
import UseAdmin from '../../Hooks/UseAdmin';

const AdminPirvateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = UseAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;

};

export default AdminPirvateRoute;