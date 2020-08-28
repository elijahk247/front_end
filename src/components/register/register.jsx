import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { register } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './register.styles.scss'

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [formValues, setFormValues] = useState({
        name: 'random',
        email: "random@gmail.com",
        password: 'password',
        confirmPassword: 'password'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const registerUser = (e) => {
        e.preventDefault();
        
        dispatch(register(formValues, history))
    };

    const clearForm = () => {
        setFormValues({
            username: '',
            password: ''
        });
    };
    return (
        <form className="form-container" onSubmit={registerUser}>
            <div className="text-field-register-container">
                <TextField
                    value={formValues.name}
                    onChange={handleChange}
                    color="secondary"
                    type="text"
                    label="Name"
                    name="name"
                    required
                />
                <TextField
                    value={formValues.email}
                    onChange={handleChange}
                    color="secondary"
                    type="text"
                    label="Email"
                    name="email"
                    required
                />
                <TextField
                    value={formValues.password}
                    onChange={handleChange}
                    color="secondary"
                    type="password"
                    label="Password"
                    name="password"
                    required
                />
                <TextField value={formValues.confirmPassword}
                    onChange={handleChange}
                    color="secondary"
                    type="password"
                    label="confirm password"
                    name="confirmPassword"
                    required>
                </TextField>
                <Button type="submit" color="secondary" variant="outlined" id='submit-btn'>
                    Register
				</Button>
            </div>
        </form>
    );
};

export default Register;
