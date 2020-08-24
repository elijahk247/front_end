import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import './register.styles.scss'

const Register = () => {
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
        console.log('You have been logged in')
        clearForm()
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
                <Button type="submit" color='secondary' variant='contained'>Register</Button>
            </div>
        </form>
    )
}

export default Register