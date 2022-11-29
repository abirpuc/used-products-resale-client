import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loader} = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <svg class="animate-bounce w-6 h-6 ...">
      </svg>
    }

    if(user){
        return children
    }
    
    return <Navigate to="/login" state={{from:location}} replace>
    </Navigate>
};

export default PrivateRouter;