import React  from 'react'
import { Card } from '@material-ui/core';
import { PayPalButton } from 'react-paypal-button-v2';
import { useDispatch } from 'react-redux';
import Loading from '../../Common/Loading';
import { payOrder } from '../../Redux/Order/OrderPay/OrderPayAction';

 import './StyleOrder.css'

export default function Orders({orderDetails,id, currentUser, sdkReady}) {

    const dispatch = useDispatch()

    const {shippingAddress,_id, isPaid, totalPrice} = orderDetails;

    const handleSuccess =(result)=>{
        console.log(result);
        dispatch(payOrder(id, result))
      }

    return (
        <Card className='table'> 
        
            <div className='table__item'>
                <p>Shipping Information</p>
            </div>
            <div className='table__item'>
                <p>ORDER</p>
                <p>{_id}</p>
            </div>
            <div className='table__item'>
                <p>Name</p>
                <p>{currentUser.name}</p>
            </div>
            <div className='table__item'>
                <p>email</p>
                <p>{currentUser.email}</p>
            </div>
            <div className='table__item'>
                <p>City</p>
                <p>
                {shippingAddress.country}, {shippingAddress.city}
                </p>
            </div>
            <div className='table__item'>
                <p>Address</p>
                <p>
                {shippingAddress.address}, {shippingAddress.zipCode}
                </p>
            </div>
            <div className='table__item'>
                <p>Total</p>
                <p>{totalPrice}$</p>
            </div>
            {!isPaid ?
                <div className='table__item'>
                    <p>Status</p>
                    <p style={{color: 'red'}}>hasn't been paid</p>
                </div> :
                <div className='table__item'>
                    <p>Status</p>
                    <p style={{color: 'green'}}>  Order Has Been Paid </p>
                </div>
            }
            
            <div className='table__bnt'>
            {
                !orderDetails.isPaid &&
                !sdkReady ? <Loading /> : 
                <PayPalButton 
                style={{zIndex:0 , width: '100%'}} 
                amount={totalPrice} 
                onSuccess={handleSuccess}/>
              }
            </div>
        </Card>
    )
}
