import './LoginForm.scss'
import React, { useState } from 'react'

function LoginForm({ Login, error }) {

    const[details, setDetails] = useState({email:'', password:''});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
    <form className='LoginForm' onSubmit={submitHandler}>

        <div className='LoginFormDiv'>

            <h2 className='LoginFormTitle'>Welcome</h2>
            {(error != '') ? (<div className='LoginFormError'>{error}</div>) : ""}

            <div className='LoginFormGroup'>
                <label htmlFor='email'>Email:</label>
                <input type='email' name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}></input>
            </div>

            <div className='LoginFormGroup'>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
            <input type='submit' value='Login'/>
        </div>
    </form>
    )
}

export default LoginForm;