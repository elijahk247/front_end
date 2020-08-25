import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import './login.styles.scss'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login as loginUser } from '../../redux/actions'

const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const [formValues, setFormValues] = useState({
        username: 'isaiah',
        password: 'password'
    })

    const login = (e) => {
        e.preventDefault()
        const user = {
            username: formValues.username,
            password: formValues.password
        }
        dispatch(loginUser(user, history))
    }

    const clearForm = () => {
        setFormValues({
            username: '',
            password: ''
        })
    }
    return (
        <form className='form-container' onSubmit={login}>
            <div className='text-field-containers'>
                <TextField value={formValues.username} onChange={handleChange} color='secondary' type='text' label='Username' name='username' required></TextField>
                <TextField value={formValues.password} onChange={handleChange} color='secondary' type='password' label='Password' name='password' required></TextField>
                <Button type="submit" color='secondary' variant='contained'>Login</Button>
            </div>
        </form>
    )
}


export default Login