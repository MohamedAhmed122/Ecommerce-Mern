import React from 'react'
import Stepper from '../../Components/Stepper/Stepper'

export default function PaymentPage() {
    return (
        <div style={{marginTop: 100}}>
            <Stepper activeStep={1}/>
        </div>
    )
}
