import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import FromText from '../Forms/FromText';

import { Card } from '@material-ui/core';

import { userLogin } from '../../Redux/user/UserAction'
import {useDispatch, useSelector } from 'react-redux'
import {useHistory } from 'react-router-dom' 

import './StyleProfileFrom.css'


const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });


export default function LoginForm() {

    const history = useHistory()
 
    const dispatch = useDispatch()
    const {isAuthenticated, currentUser,  error} =  useSelector(state => state.user)



    useEffect(()=>{
        if(!isAuthenticated){
            history.push('/')
        }
    },[isAuthenticated,history])

    // if(loading) return <Loading />
    return (
        <Card  className='profile_card'>
            <h1>Update your profile</h1>
            <div className='profile_form'>
                
                <Formik
                    initialValues={{
                        name: currentUser.name || '',
                        email: currentUser.email ||'',
                        password: '', 
                        confirmPassword: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, ) =>{
                       dispatch(userLogin(values.email, values.password))
                    }}
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
