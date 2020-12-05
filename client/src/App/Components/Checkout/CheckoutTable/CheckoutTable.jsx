import React, { useEffect }  from 'react'
import { Card } from '@material-ui/core'
import CustomButton from '../../CustomButton/CustomButton'

import './CheckoutTable.css'

import { useDispatch, useSelector } from 'react-redux'
import { calculateTotal } from '../../../utilities/utility'
import { createOrder } from "../../../Redux/OrdersRedux/Orders/OrderAction"
import { useHistory } from 'react-router-dom'
export default function CheckoutTable() {

    const {shippingAddress, carts } = useSelector(state => state.cart)
    const cart = useSelector((state) => state.cart)  
    const { order, success } = useSelector(state => state.orders)
    const dispatch = useDispatch()
    const history = useHistory()
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
      }

    cart.itemsPrice = addDecimals(calculateTotal(carts))
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)
    cart.taxPrice = addDecimals(Number((0.09 * cart.itemsPrice).toFixed(2)))
    cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
    ).toFixed(2)
    console.log(success);
    useEffect(()=>{
        if(success){
           
            history.push(`/orders/${order._id}`)
            
        }
    },[history,success, order._id])
 
    // console.log(order._id);

    const handleSubmit = () =>{
        dispatch(createOrder({
            orderItems: carts,
            shippingAddress:shippingAddress,
            paymentMethod: 'paypall',
            itemsPrice:cart.itemsPrice ,
            taxPrice: cart.taxPrice,
            shippingPrice: cart.shippingPrice,
            totalPrice: cart.totalPrice 
        }))
        // if(success) 
    }
    
    return (
        <Card className='table'> 
            <div className='table__item'>
                <p>Country</p>
                <p>{shippingAddress.country}, {shippingAddress.city}</p>
            </div>
            <div className='table__item'>
                <p>Address</p>
                <p>{shippingAddress.address}, {shippingAddress.zipCode}</p>
            </div>
            <div className='table__item'>
                <p>Total</p>
                <p>{calculateTotal(carts)}</p>
            </div>
            <div className='table__item'>
                <p>Shipping</p>
                <p>{cart.shippingPrice}</p>
            </div>
            <div className='table__item'>
                <p>Taxes</p>
                <p>{cart.taxPrice} </p>
            </div>
            <div className='table__item'>
                <p>Total Price</p>
                <p>{cart.totalPrice}</p>
            </div>
            <div className='table__bnt'>
               <CustomButton title='Place Order'  onClick={handleSubmit} />
            </div>
        </Card>
    )
}
