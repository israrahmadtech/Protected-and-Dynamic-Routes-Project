import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    const isLoggedIn = currentUser ? true : false
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes