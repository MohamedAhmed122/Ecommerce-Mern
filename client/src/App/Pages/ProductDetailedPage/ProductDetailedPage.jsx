import { Container } from '@material-ui/core'
import React from 'react'
import { useParams } from 'react-router-dom'
import DetialsHeader from '../../Components/ProductDetials/DetialsHeader'
import products from '../HomePage/products'

export default function ProductDetailedPage() {
    const {id} = useParams()
    const product = products.find(p =>
        p.id === id)
    return (
        <div style={{marginTop: 200}}>
            <Container>
                <DetialsHeader product={product}/>

            </Container>
        </div>
    )
}
