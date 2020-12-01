import React from 'react'
import ShippingForm from '../../Components/ShippingForm/ShippingForm'
import Stepper from '../../Components/Stepper/Stepper'



export default function ShippingPage() {
    return (
        <div className='login_screen'>
            <Stepper activeStep={0}/>
            <ShippingForm />
        </div>
    )
}
