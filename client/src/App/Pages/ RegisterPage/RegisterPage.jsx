import React from 'react'
import RegisterForm from '../../Components/RegisterForm/RegisterFrom'
import { Link } from 'react-router-dom'


export default function RegisterPage() {
    return (
        <div className='login_screen'>
            <RegisterForm />
            <h1>You don't have account? 
                <Link to='/login'>Login</Link>  
            </h1>
        </div>
    )
}
