import React from 'react'
import Checkout from '../../Components/Checkout/Checkout'
import HorizontalLinearStepper from '../../Components/Stepper/Stepper'

import './StylePlaceOrder.css'

export default function PlaceOrderPage() {
    return (
        <div style={{marginTop: 10}}>
            <div className='place_order'>
                <HorizontalLinearStepper activeStep={2} />
            </div>
            <Checkout />
        </div>
    )
}
