import React from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import FromText from '../Forms/FromText';

import { Card } from '@material-ui/core';

import './styleLoginForm.css'


const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6)
  });

export default function LoginForm() {
    return (
        <Card className="card_login_form">
            <h1>login to our e-commerce platform</h1>
            <div className='login_form_container'>
                
                <Formik
                    initialValues={{email:'', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ dirty,isSubmitting, isValid })=>(

                        <Form>
                            <FromText  label="email"   name='email' />
                            <FromText type='password'  label="password"   name='password' />
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
