import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <progress className="progress progress-info w-96 bg-primary"></progress>
    }
    if (user) {
        return children
    }

    return <Navigate to='/login'></Navigate>

};

export default PrivateRoute;