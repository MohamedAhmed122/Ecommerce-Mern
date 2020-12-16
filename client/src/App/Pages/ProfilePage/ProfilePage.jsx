import React from 'react'
import ProfileForm from '../../Components/ProfileForm/ProfileForm'
import './StyleProfilePage.css'

export default function ProfilePage() {
    return (
        <div className='login_screen'>
            <ProfileForm />
            <div style={{width: '60vw'}}></div>
            
        </div>
    )
}
