import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateComponent = ({ children }) => {
  const token = localStorage.getItem('userToken');

  if (!token) {
    // Redirect to login page if token is not available
    alert('Login first');
    return <Navigate to="/login" />;
  }

  // Render children components if token is available
  return <div>{children}</div>;
};

export default PrivateComponent;
