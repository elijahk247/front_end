import React from 'react'

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
        <form className='form-container' onSubmit={onSubmit}>
            <h2>Register a New User</h2>
            <div className='form-inputs'>
                <h4>Please Fill in the Form Below:</h4>

                {/* TEXT INPUTS */}
                <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name='username'
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
            </div>

            <div className='form-submit'>
            {/* BUTTON IS DISABLED UNTIL CONDITIONS ARE MET */}
                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
        </form>
    )
}