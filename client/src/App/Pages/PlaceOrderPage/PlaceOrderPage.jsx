import React from 'react'
import Checkout from '../../Components/Checkout/Checkout'
import HorizontalLinearStepper from '../../Components/Stepper/Stepper'

export default function PlaceOrderPage() {
    return (
        <div style={{marginTop: 10}}>
            <div style={{display: 'flex', justifyContent:"center"}}>
                <HorizontalLinearStepper activeStep={2} />
            </div>
            <Checkout />
        </div>
    )
}
