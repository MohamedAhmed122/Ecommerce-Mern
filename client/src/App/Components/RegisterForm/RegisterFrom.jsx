import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import FromText from '../Forms/FromText';

import { Card } from '@material-ui/core';

import { userRegister } from '../../Redux/user/UserAction'
import {useDispatch, useSelector } from 'react-redux'
import {useLocation, useHistory } from 'react-router-dom' 




const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(4),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });

export default function RegisterForm() {

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

    return (
        <Card className="card_register">
            <h1>register to our e-commerce platform</h1>
            <div className='login_form_container'>
                
                <Formik
                    initialValues={{name: '',email:'', password: '', confirmPassword:''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>{
                       dispatch(userRegister( values.name, values.email, values.password))
                       if(!error){
                        history.push(redirect)
                        }
                    }}
                >
                    {({ dirty,isSubmitting, isValid })=>(

                        <Form>
                            <FromText  label="name"   name='name' />
                            <FromText  label="email"   name='email' />
                            <FromText type='password'  label="password"   name='password' />
                            <FromText type='password'  label="confirm password"   name='confirmPassword' />
                            {error && <label className='label'>{error}</label>}
                            <div className='btn'>
                                <CustomButton 
                                    disabled={!dirty || !isValid || isSubmitting}
                                    inverted 
                                    type='submit' 
                                    title='Register' 
                                    />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}
