import React from 'react'

export default function Registration(props) {
    const { values, submit, inputChange, submit, disabled, errors } = props;

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
            <div className='form-submit'>

                <h2>Register a New User</h2>
                {/* BUTTON IS DISABLED UNTIL CONDITIONS ARE MET */}
                <button disbaled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className='form-inputs'>
                <h4>Please Fill in the Form Below:</h4>

                {/* TEXT INPUTS */}
                <label>Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={oninputChange}
                        name='username'
                        type='text'
                    />
                </label>
                <label>Password:&nbps;
                    <input
                        value={values.password}
                        inputChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>
        </form>
    )
}