import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    let auth={'token':true}
  return (
    <div>
      {auth.token ? <Outlet /> : <Navigate to={"/login"} /> }
    </div>
  );
}

export default PrivateRoute;
