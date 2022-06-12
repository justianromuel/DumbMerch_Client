import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const isLogin = true

    return isLogin === true ? <Outlet /> : <Navigate to='/' />
}

export default PrivateRoute