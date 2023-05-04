import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress progress-info w-96 bg-primary "></progress>
    }
    if (user) {
        return children
    }

    return <Navigate state={{ from: location }} to='/login' replace></Navigate>

};

export default PrivateRoute;