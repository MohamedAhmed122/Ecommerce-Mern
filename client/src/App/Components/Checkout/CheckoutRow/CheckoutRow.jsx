import { Card } from '@material-ui/core';
import React from 'react'
import './CheckoutRow.css'

export default function CheckoutRow({item}) {

    const {image, name,  price, qty } = item;

    return (
        <Card>
            <div className='checkout_row'>
                <img src={image} alt='' />
                <div className='row_title'>
                    <p> {name}</p>
                </div>
                <div className='checkout_price'>
                    <p>{qty} x ${price} = ${qty * price}</p>
                </div>
            </div>
            <hr  className='line'/>
        </Card>
    )
}

