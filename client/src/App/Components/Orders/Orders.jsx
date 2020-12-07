import React from 'react'
import { Card } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PersonIcon from '@material-ui/icons/Person';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ReceiptIcon from '@material-ui/icons/Receipt';
import './StyleOrder.css'

export default function Orders({orderDetails, currentUser}) {



    const {shippingAddress, isPaid, isDelivered,_id, totalPrice} = orderDetails;
    return (

            <Card className='orders_card'>
                <div className='orders_container'>
                    <div>
                        <ShoppingBasketIcon fontSize='large'/>
                        <p>Tracking number {_id} </p>
                    </div>
                    <div>
                        <PersonIcon fontSize='large'/>
                        <p>{currentUser.name}</p>
                    </div>
                    <div>
                        <MailOutlineIcon fontSize='large'/>
                        <p>{currentUser.email}</p>
                    </div>
                    <div>
                        <HomeIcon fontSize='large'/>
                        <p>
                            {shippingAddress.country}, {shippingAddress.city}, {shippingAddress.address}, {shippingAddress.zipCode}
                        </p>
                    </div>
                    <div>
                        <PaymentIcon fontSize='large'/>
                        <p> PayPal</p>
                    </div>
                    <div>
                        <ReceiptIcon fontSize='large'/>
                        <p>Total is {totalPrice}$</p>
                    </div>
                    <div>
                        {!isPaid ?
                            <>
                                <CancelIcon fontSize='large' style={{color: 'red'}}/>
                                <p style={{color: 'red'}}>  Order hasn't been paid yet</p>
                            </> :
                            <>
                                <CheckCircleIcon fontSize='large' style={{color: 'green'}}/>
                                <p style={{color: 'green'}}>  Order Has Been Paid </p>
                            </>
                        }
                    </div>
                    <div>
                        {isPaid &&
                            <>
                                {!isDelivered ?
                                    <>
                                        <CancelIcon fontSize='large' style={{color: 'red'}}/>
                                        <p style={{color: 'red'}}> Hasn't been delivered</p>
                                    </> :
                                    <>
                                        <CheckCircleIcon fontSize='large' style={{color: 'green'}}/>
                                        <p style={{color: 'green'}}>  has been delivered </p>
                                    </>
                                }
                            </>   
                        }
                    </div>
                </div>
            </Card>
          
    )
}
