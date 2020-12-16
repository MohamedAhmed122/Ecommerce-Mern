import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import FromText from '../Forms/FromText';

import { Card } from '@material-ui/core';

import { getUserProfile, updateUserProfile } from '../../Redux/profile/profileAction'
import {useDispatch, useSelector } from 'react-redux'
import {useHistory } from 'react-router-dom' 

import './StyleProfileFrom.css'


const validationSchema = Yup.object({
    email: Yup.string().email(),
    password: Yup.string().min(4),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });


export default function LoginForm() {

    const history = useHistory()
 
    const dispatch = useDispatch()
    const {isAuthenticated, currentUser,  error} =  useSelector(state => state.user)
    const {userProfile } = useSelector(state => state.profile)
    
    useEffect(()=>{
        if(!isAuthenticated){
            history.push('/')
        }else{
            dispatch(getUserProfile())
        }
    },[isAuthenticated,history, dispatch, currentUser])

    console.log(currentUser);

  
    return (
        <Card  className='card_login_form' style={{marginTop:"5rem"}}>
            <h1>Update your profile</h1>
            <div className='login_form_container'>
                
                <Formik
                    initialValues={{
                        name: currentUser?.name || '',
                        email: currentUser?.email ||'',
                        password: '', 
                        confirmPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={ (values)=>{
                        dispatch(updateUserProfile({
                            _id: currentUser._id,
                            name: values.name,
                            email: values.email,
                            password: values.password
                        }))
                    }
                    }
                >
                    {({ isSubmitting })=>(

                        <Form>
                            <FromText  label="name"   name='name' />
                            <FromText  label="email"   name='email' />
                            <FromText type='password'  label="password"   name='password' />
                            <FromText type='password'  label="confirm password"   name='confirmPassword' />
                            {error && <label className='label'>{error}</label>}
                            <div className='btn'>
                                <CustomButton 
                                    disabled={isSubmitting} 
                                    type='submit' 
                                    title='Update' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}
