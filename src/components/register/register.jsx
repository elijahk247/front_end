import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { register } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory()

    const [formValues, setFormValues] = useState({
        username: 'isaiah',
        password: 'password'
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
            <div className="text-field-containers">
                <TextField
                    value={formValues.username}
                    onChange={handleChange}
                    color="secondary"
                    type="text"
                    label="Username"
                    name="username"
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
                <Button type="submit" color="secondary" variant="contained">
                    Register
				</Button>
            </div>
        </form>
    );
};

export default Register;
