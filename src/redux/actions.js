import React from 'react'
import axiosWithAuth from '../utils/auth/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export const login = (user, history) => async (dispatch) => {
    try {
        const res = await axiosWithAuth().post('/api/auth/login', user)
        const token = res.data.token
        localStorage.setItem('token', token)
        dispatch({ type: 'LOGIN' })
        history.push('/')
    } catch (error) {
        dispatch({ type: 'ERROR' })
    }
}

export const register = (formValues, history) => async (dispatch) => {
    try {
        await axiosWithAuth().post('/api/auth/register', formValues)
        dispatch({ type: 'REGISTER', payload: true })
        history.push('/login')
    } catch (error) {
        dispatch({ type: "ERROR", payload: error })
    }
}

export const logOut = (history) => (dispatch) => {
    localStorage.removeItem('token')
    history.push('/login')
    dispatch({ type: 'LOG_OUT' })
}

export const checkIfUserIsLoggedIn = () => dispatch => {
    const token = localStorage.getItem('token')
    if (token) {
        dispatch({ type: 'LOGIN' })
    }

}