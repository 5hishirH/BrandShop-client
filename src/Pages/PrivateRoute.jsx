import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../AuthProvider';

const PrivateRoute = ({children}) => {
    const { loading, user } = useAuthContext();
    if(loading) {
        return (
            <div></div>
        )
    }
    else if(user) {
        return children
    }
    else {
        return <Navigate to={'/login'}></Navigate>
    }
}

export default PrivateRoute;