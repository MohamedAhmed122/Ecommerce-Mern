import React  from 'react'
import { Card } from '@material-ui/core'
import CustomButton from '../../CustomButton/CustomButton'

import './CheckoutTable.css'
import { useSelector } from 'react-redux'
import { calculateTotal } from '../../../utilities/utility'

export default function CheckoutTable() {

    const {shippingAddress, carts } = useSelector(state => state.cart)
    const cart = useSelector((state) => state.cart)
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
               <CustomButton title='Place Order'  />
            </div>
        </Card>
    )
}
