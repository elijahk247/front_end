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
        console.log(formValues)
    }
    const [formValues, setFormValues] = useState({
        email: 'greatpup1960@gmail.com',
        password: 'isaiah123'
    })

    const login = (e) => {
        e.preventDefault()
        const user = {
            email: formValues.email,
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
                <TextField value={formValues.email} onChange={handleChange} color='secondary' type='email' label='Email' name='email' required></TextField>
                <TextField value={formValues.password} onChange={handleChange} color='secondary' type='password' label='Password' name='password' required></TextField>
                <Button type="submit" color='secondary' variant='outlined' id='submit-btn'>Login</Button>
            </div>
        </form>
    )
}


export default Login