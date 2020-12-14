import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { productDetail } from '../../Redux/products/ProductListDetails/ProductDetailActions'

import { Container } from '@material-ui/core'

import Alert from '../../Common/Alert'
import Loading from '../../Common/Loading'
import Header from '../../Components/ProductDetials/DetialsHeader'
import ProductDescription from '../../Components/ProductDetials/ProductDescription'


export default function ProductDetailedPage() {

    const {product, loading, error} = useSelector(state => state.productDetail);
    const dispatch = useDispatch()
    const { id } = useParams()
    
    useEffect(()=>{
        dispatch(productDetail(id))
  },[dispatch,id])

  if(loading) return <Loading />
    return (
        <div style={{marginTop: 200}}>
            <Container>
            {/* {error && <Alert  severity="error">{error}</Alert>} */}
                <Header product={product}/>
                <ProductDescription product={product} />
            </Container>
        </div>
    )
}
