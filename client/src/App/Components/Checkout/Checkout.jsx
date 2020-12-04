import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import CheckoutRow from './CheckoutRow/CheckoutRow'
import CheckoutTable from './CheckoutTable/CheckoutTable'

import './styleCheckout.css'

export default function Checkout() {

    const history = useHistory()
    const { shippingAddress, carts} = useSelector(state => state.cart)

    useEffect(()=>{
        if(!shippingAddress.country){
            history.push('/shipping')
        }
    },[history, shippingAddress])
   
    return (
        <div className='checkout'>
               
            <div className='checkout_left'>
                <Container>
                    <div>
                        { carts.map(item => <CheckoutRow key={item.product} item={item} />)}
                    </div>
                </Container>
            </div>
             <div className='checkout_right'>
                <CheckoutTable />
             </div>
        </div>
    )
}

