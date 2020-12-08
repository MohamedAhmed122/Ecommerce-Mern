import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../../Components/CustomButton/CustomButton'
import FromText from '../../Components/Forms/FromText';

import { AdminGetUserById } from '../../Redux/Admin/Admin-users/AdminUserAction'

import { Card } from '@material-ui/core';

import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom' 
import Loading from '../../Common/Loading';


const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email(),
    
  });


export default function EditUserPage() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const { userDetails } = useSelector(state => state.adminGetUser)

    useEffect(()=>{
        dispatch(AdminGetUserById(id))
    },[id, dispatch])

    if( !userDetails ) return <Loading />

    return (
        <div className='login_screen'>
            <Card className="card_register">
                <h1>Edit User</h1>
                <div className='login_form_container'>
                    
                    <Formik
                        initialValues={{
                            name: userDetails.name ||'',
                            email: userDetails.email ||'', 
                            isAdmin: userDetails.isAdmin ||""
                        }}
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
