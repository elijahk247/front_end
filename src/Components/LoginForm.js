import React from 'react'
import styled from 'styled-components'

const StyledLogin = styled.div `
    h2{
        color: white;
    }
`

const StyledInputs = styled.div `
    display: flex;
    flex-direction: column;
`

export default function Login(props) {
    const { values,  inputChange, disabled, errors, submitLogin } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submitLogin();
    }

    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    return (
        <StyledLogin>
        <form className='form-container' onSubmit={submitLogin}>
            <h2>Login</h2>
            <StyledInputs className='form-inputs'>
                <h4>Please Fill in the Form Below:</h4>

                {/* TEXT INPUTS */}
                <label>name:&nbsp;
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>
            </StyledInputs>

            <div className='form-submit'>
            {/* BUTTON IS DISABLED UNTIL CONDITIONS ARE MET */}
                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
        </StyledLogin>
    )
}

