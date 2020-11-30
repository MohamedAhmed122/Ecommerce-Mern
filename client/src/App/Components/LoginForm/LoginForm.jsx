import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import FromText from '../Forms/FromText';

import { Card } from '@material-ui/core';

import { userLogin } from '../../Redux/user/UserAction'
import {useDispatch, useSelector } from 'react-redux'
import {useLocation, useHistory } from 'react-router-dom' 

import './styleLoginForm.css'


const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4)
  });

export default function LoginForm() {

    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const {isAuthenticated,  error} =  useSelector(state => state.user)

    const redirect = location.search ? location.search.split('=')[1] :'/'

    useEffect(()=>{
        if(isAuthenticated){
            history.push(redirect)
        }
    },[isAuthenticated,redirect,history])

    // if(loading) return <Loading />
    return (
        <Card className="card_login_form">
            <h1>login to our e-commerce platform</h1>
            <div className='login_form_container'>
                
                <Formik
                    initialValues={{email:'', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values, {resetForm}) =>{
                       dispatch(userLogin(values.email, values.password))
                       resetForm()
                    }}
                >
                    {({ dirty,isSubmitting, isValid })=>(

                        <Form>
                            <FromText  label="email"   name='email' />
                            <FromText type='password'  label="password"   name='password' />
                            {error && <label className='label'>{error}</label>}
                            <div className='btn'>
                                <CustomButton 
                                    disabled={!dirty || !isValid || isSubmitting}
                                    inverted 
                                    type='submit' 
                                    title='Login' />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}
