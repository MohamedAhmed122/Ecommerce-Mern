import { Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetialsHeader from '../../Components/ProductDetials/DetialsHeader'
import ProductDescription from '../../Components/ProductDetials/ProductDescription'
// import products from '../HomePage/products'

export default function ProductDetailedPage() {
    const [product, setProduct] = useState([])

    const { id } = useParams()
    
    useEffect(()=>{
      const fetchData = async()=>{
          fetch(`/api/products/${id}`)
          .then(response => response.json())
          .then(data => setProduct(data))
      }
      fetchData();
  },[id])

    return (
        <div style={{marginTop: 200}}>
            <Container>
                <DetialsHeader product={product}/>
                <ProductDescription product={product} />

            </Container>
        </div>
    )
}
