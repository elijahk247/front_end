import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/auth/axiosWithAuth'
// import jwt_decode from 'jwt-decode'
import JwtDecode from 'jwt-decode'

let token = localStorage.getItem('token')
if(token){
    const decode = JwtDecode(token)
}



const UserDashboard = () => {
    // useEffect(async () => {
    //     try {
    //         let res = await axiosWithAuth().get('/api/ailments')
    //     } catch (error) {

    //     }

    // }, [])
    return (
        <h1>Dashboard</h1>
    )
}
export default UserDashboard