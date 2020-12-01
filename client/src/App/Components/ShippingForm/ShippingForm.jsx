import React from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../CustomButton/CustomButton'
import FromText from '../Forms/FromText';

import { Card } from '@material-ui/core';

import { SaveCartShippingAddress } from '../../Redux/cart/CartAction'
import {useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom' 


const validationSchema = Yup.object({
    country: Yup.string().required(),
    city: Yup.string().required(),
    address: Yup.string().required(),
    zipCode: Yup.string().required().label('Zip code'),
  });

export default function LoginForm() {

    const history = useHistory()
    const dispatch = useDispatch()
    const { error} =  useSelector(state => state.user)
    const {shippingAddress } = useSelector(state => state.cart)
    
    return (
        <Card className="card_login_form">
            <h1>Add your shipping data</h1>
            <div className='login_form_container'>
                
                <Formik
                    initialValues={{
                        country:shippingAddress?.country ||'', 
                        city:shippingAddress?.city || '',
                        address: shippingAddress?.address || '', 
                        zipCode: shippingAddress?.zipCode || ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values) =>{
                       dispatch(SaveCartShippingAddress(values))
                       history.push('/payment')
                    }}
                >
                    {({ dirty,isSubmitting, isValid })=>(

                        <Form>
                            <FromText  label="Country"   name='country' />
                            <FromText  label="City"   name='city' />
                            <FromText  label="Address"   name='address' />
                            <FromText  label="Zip code"   name='zipCode' />
                            {error && <label className='label'>{error}</label>}
                            <div className='btn'>
                                <CustomButton 
                                    disabled={!dirty || !isValid || isSubmitting}
                                    inverted 
                                    type='submit'
                                    title='Submit' 
                                    />
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Card>
    )
}
