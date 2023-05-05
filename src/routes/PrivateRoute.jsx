import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center h-[80vh] items-center bg-primary'><HashLoader color="#e3ed4c" size={60} /></div>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivateRoute;