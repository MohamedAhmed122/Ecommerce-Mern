import React, { useEffect } from 'react'
import Lottie from 'react-lottie'
import { useSelector } from 'react-redux'

import { Card, FormControlLabel, Radio } from '@material-ui/core'

import Stepper from '../../Components/Stepper/Stepper'
import paypal from '../../../Animation/paypal.json'
import stripe from '../../../Animation/stripe.json'
import CustomButton from '../../Components/CustomButton/CustomButton'



import './StylePayment.css'


export default function PaymentPage({history}) {

    const { shippingAddress} = useSelector(state => state.cart)

    useEffect(()=>{
        if(!shippingAddress.country){
            history.push('/shipping')
        }
    },[history, shippingAddress])
    const defaultOptions1 = {
        loop: true,
        autoplay: true, 
        animationData: paypal,
      };

      const defaultOptions2 = {
        loop: true,
        autoplay: true, 
        animationData: stripe,
      };
    return (
        <div className='payment'>
            <Stepper activeStep={1}/>
            <Card className='payment__card'>
                <h3>Select your Favorite Payment</h3>
                <div className='payment_select'>
                    <Lottie options={defaultOptions1}
                        height={200}
                        width={200}
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Radio checked color="primary" />}
                        label="Paypal"
                        labelPlacement="end"
                        />
                </div>
                <div className='payment_select'>
                    <Lottie options={defaultOptions2}
                        height={200}
                        width={200}
                    />
                    <FormControlLabel
                        value="bottom"
                        control={<Radio checked={false} color="primary" />}
                        label="Stripe"
                        labelPlacement="end"
                        />
                </div>
                <div  className='btn'>
                    <CustomButton 
                    title='continue' 
                    type='submit'
                    onClick={() =>history.push('/placeOrder')} 
                    inverted />
                </div>
            </Card>
        </div>
    )
}
