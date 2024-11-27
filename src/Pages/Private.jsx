import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Private = () => {
  const token=false;
  return (
    token?<Outlet/>:<Navigate to='/login'></Navigate>
  )
}

export default Private