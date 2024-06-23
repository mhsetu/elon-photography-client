import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../AuthProvider/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <span className='loading loading-ring loading-lg'>Loading...</span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
  }

  return children;
};

export default PrivateRoute;
