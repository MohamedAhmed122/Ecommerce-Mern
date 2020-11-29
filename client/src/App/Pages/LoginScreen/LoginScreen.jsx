import React from 'react'

import './StyleLoginScreen.css'
import { Link } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'

export default function LoginScreen() {
    return (
        <div className='login_screen'>
            <LoginForm />
            <h1>You don't have account? 
                <Link to='/register'>Register</Link>  
            </h1>
        </div>
    )
}
