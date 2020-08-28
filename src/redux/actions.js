import React from 'react'
import axiosWithAuth from '../utils/auth/axiosWithAuth'
import { useHistory } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

export const login = (user, history) => async (dispatch) => {
    try {
        const res = await axiosWithAuth().post('/api/v1/users/login', user)
        const token = res.data.token
        localStorage.setItem('token', token)
        dispatch({ type: 'LOGIN' })
        console.log('Worked')
        history.push('/')
    } catch (error) {
        console.log(error)
        dispatch({ type: 'ERROR' })
    }
}

export const register = (formValues, history) => async (dispatch) => {
    try {
        let res = await axiosWithAuth().post('/api/v1/users/register', formValues)
        const token = res.data.token
        localStorage.setItem('token', token)
        dispatch({ type: 'REGISTER' })
        history.push('/')
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

export const getAilments = () => async dispatch => {
    console.log('from get ailments')
    try {
        let res = await axiosWithAuth().get('/api/v1/users/me/ailments')
        let ailments = res.data.payload.ailments
        dispatch({ type: "FETCH_AILMENTS", payload: ailments })
    } catch (error) {
        console.log(error)
    }
}

export const postAilment = (ailment, history) => async dispatch => {
    try {
        let res = await axiosWithAuth().post('/api/v1/ailments', ailment)
        let newAilment = res.data.payload.ailment
        history.push('/')
        dispatch({ type: "POST_AILMENT", payload: newAilment })
    } catch (error) {
        console.log(error)
    }
}

export const updateAilment = (newAilment, history) => async dispatch => {
    try {
        let res = await axiosWithAuth().patch(`/api/v1/ailments/${newAilment.id}`, newAilment)
        let ailment = res.data.payload.ailment
        dispatch({ type: "UPDATE_AILMENT" })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const deleteAilment = (id, history) => async dispatch => {
    try {
        let res = await axiosWithAuth().delete(`/api/v1/ailments/${id}`)
        dispatch({ type: "DELETE_AILMENT", payload: id })
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}