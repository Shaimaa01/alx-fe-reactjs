/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

function ProtectedRoute({ children }) {
    // eslint-disable-next-line no-undef
    const isAuthenticated = useAuth();
  
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

export default ProtectedRoute;
