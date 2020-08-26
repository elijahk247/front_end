import React from 'react'
// to style the webpage
import styled from 'styled-components'

const StyledRegistration = styled.div `
    
    h2 {
        border: 1px solid grey;
        

        color: white;
    }
`

const StyledInputs = styled.div `
    display: flex;
    flex-direction: column;
    /* text-align: left; */

    /* margin: auto; */
`

export default function Registration(props) {
    const { values, submit, inputChange, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onInputChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }

    return (
        <StyledRegistration>
        <form className='form-container' onSubmit={submit}>
            <h2>Register a New User</h2>
            <StyledInputs>
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
        </StyledRegistration>
    )
}