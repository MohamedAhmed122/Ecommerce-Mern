import React, { useEffect } from 'react'

import{ Formik, Form } from 'formik'
import * as Yup from 'yup'

import CustomButton from '../../../Components/CustomButton/CustomButton'
import FromText from '../../../Components/Forms/FromText';


import { Card } from '@material-ui/core';

import {useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { adminUpdateProduct } from '../../../Redux/Admin/Admin-update-product/updateProductActions' 
import {productDetail} from '../../../Redux/products/ProductListDetails/ProductDetailActions'
import Loading from '../../../Common/Loading';


const validationSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required(),
    image: Yup.string().required(),
    description: Yup.string().required(),
    category: Yup.string().required(),
    brand: Yup.string().required(),
    countInStock: Yup.number().required(),
    
  });


export default function EditProductPage() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const history = useHistory()
    const { currentUser } = useSelector(state => state.user)
    const { product, loading } = useSelector(state => state.productDetail)
    useEffect(()=>{
        if(currentUser.isAdmin === "true"){
            dispatch(productDetail(id))
        }else{
            history.push('/login')
        }
    },[history, currentUser, dispatch, id])

    if(loading)  return <Loading />

    return (
        <div className='login_screen'>
            <Card  className="card_register">
                <h1>Edit Product</h1>
                <div className='login_form_container'>
                    
                    <Formik
                        initialValues={{
                            name: product.name ||"",
                            image:product.image ||"",
                            price: product.price|| 0, 
                            description: product.description || "",
                            category:product.category || "",
                            brand: product.brand ||"",
                            countInStock:product.countInStock|| 0
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) =>{
                           
                            dispatch(adminUpdateProduct(id, values))
                            history.goBack()
                        }}
                        
                    >
                        {({ dirty,isSubmitting, isValid })=>(
                            <Form>
                                <FromText  label="name"   name='name' />
                                <FromText  label="price"   name='price' type='number' />
                                <FromText  label="category"   name='category' />
                                <FromText  label="image"   name='image' />
                                <FromText  label="description"   name='description' />
                                <FromText  label="brand"   name='brand' />
                                <FromText type='number'  label="Count In Stock"   name='countInStock' />
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
