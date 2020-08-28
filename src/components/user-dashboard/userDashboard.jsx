import React, { useState, useEffect } from 'react'
import axiosWithAuth from '../../utils/auth/axiosWithAuth'
import axios from 'axios'
import { getAilments } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Ailment from '../ailment/ailment'
import './userDashboard.styles.scss'

const UserDashboard = () => {
    const dispatch = useDispatch()
    const ailments = useSelector(state => state.ailments)

    useEffect(() => {
        dispatch(getAilments())
    }, [])

    return (
        <div className='ailments-container'>
            {
                ailments.map(ailment => {
                    const { _id: id } = ailment
                    const { Name, Description } = ailment.recommendation
                    return <Ailment name={Name} description={Description} id={id}></Ailment>
                })
            }
        </div>
    )
}
export default UserDashboard