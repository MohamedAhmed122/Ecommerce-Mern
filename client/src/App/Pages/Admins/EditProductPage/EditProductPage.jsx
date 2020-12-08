import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../../../Components/CustomButton/CustomButton'
import FromText from '../../../Components/Forms/FromText';


import { Card } from '@material-ui/core';

import {useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom' 
import Loading from '../../../Common/Loading';


const validationSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.string().required(),
    description: Yup.string().required(),
    category: Yup.string().required(),
    brand: Yup.string().required(),
    countInStock: Yup.string().required(),
    
  });


export default function EditProductPage() {

    const dispatch = useDispatch()
    const { id } = useParams()
    // const { userDetails } = useSelector(state => state.adminGetUser)
    // const { success } = useSelector(state => state.adminUpdateUser)

    // useEffect(()=>{
    //     dispatch(AdminGetUserById(id))
    // },[id, dispatch, success])

    // if( !userDetails ) return <Loading />

    return (
        <div className='login_screen'>
            <Card  className="card_register">
                <h1>Edit Product</h1>
                <div className='login_form_container'>
                    
                    <Formik
                        initialValues={{
                            name: "",
                            price: "", 
                            description: "",
                            category: "",
                            brand: "",
                            countInStock:""
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>{
                            console.log(values)
                        }}
                    >
                        {({ dirty,isSubmitting, isValid })=>(
                            <Form>
                                <FromText  label="name"   name='name' />
                                <FromText  label="price"   name='price' />
                                <FromText  label="category"   name='category' />
                                <FromText  label="description"   name='description' />
                                <FromText  label="brand"   name='brand' />
                                <FromText  label="Count In Stock"   name='countInStock' />
                                <div className='btn'>
                                    <CustomButton 
                                        disabled={!dirty || !isValid || isSubmitting}
                                        inverted 
                                        type='submit' 
                                        title='Edit Product' 
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
