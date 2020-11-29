import React from 'react'

import{ Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import TextField from '@material-ui/core/TextField';

import { Card } from '@material-ui/core';

import './styleLoginForm.css'


const validationSchema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6)
  });

export default function LoginForm() {
    return (
        <Card className="card_login_form">
            <div className='login_form_container'>
                <Formik
                    initialValues={{email:'', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={(values) => console.log(values)}
                >
                    {({
                         values,
                         touched,
                         errors,
                         dirty,
                         isSubmitting,
                         handleChange,
                         handleBlur,
                         handleSubmit,
                    })=>(

                        <Form>
                            <TextField 
                                className='input'
                                value={values.email}
                                onChange={handleChange('email')}
                                onBlur={handleBlur('email')}
                                fullWidth
                                label="email" 
                                variant="outlined"
                                />
                                {errors.email && touched.email && (
                                   <label className='label'> {errors.email}</label>
                                )}
                                <TextField 
                                className='input'
                                value={values.password}
                                onChange={handleChange('password')}
                                onBlur={handleBlur('password')}
                                fullWidth
                                label="password" 
                                variant="outlined"
                                />
                                {errors.password && touched.password && (
                                   <label className='label'> {errors.password}</label>
                                )}
                            <div className='btn'>
                                <CustomButton 
                                    disabled={!dirty || isSubmitting}
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
