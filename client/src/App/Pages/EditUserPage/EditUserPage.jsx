import React from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../../Components/CustomButton/CustomButton'
import FromText from '../../Components/Forms/FromText';

import { Card } from '@material-ui/core';

import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom' 


const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email(),
    
  });


export default function EditUserPage() {

    const dispatch = useDispatch()
    const { id } = useParams()


    return (
        <div className='login_screen'>
            <Card className="card_register">
                <h1>Edit User</h1>
                <div className='login_form_container'>
                    
                    <Formik
                        initialValues={{name: '',email:'', isAdmin: false}}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>{
                        console.log(values)
                        }}
                    >
                        {({ dirty,isSubmitting, isValid })=>(
                            <Form>
                                <FromText  label="name"   name='name' />
                                <FromText  label="email"   name='email' />
                                <FromText  label="Admin"   name='isAdmin' />
                                <div className='btn'>
                                    <CustomButton 
                                        disabled={!dirty || !isValid || isSubmitting}
                                        inverted 
                                        type='submit' 
                                        title='Edit User' 
                                        />
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Card>
        </div>
    )
}
