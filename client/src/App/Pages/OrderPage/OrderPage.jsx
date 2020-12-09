import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../Common/Loading'
import Orders from '../../Components/Orders/Orders'
import { getOrderDetails } from "../../Redux/Order/OrderDetial/OrderDetailAction"
import {ORDER_PAY_RESET} from '../../Redux/Order/OrderPay/OrderPayTypes'
import './StyleOrderPage.css'
import car from '../../../Animation/car.json'
import Lottie from 'react-lottie'
import CartRow from '../../Components/CartRow/CartRow'

export default function OrderPage({history}) {

    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch()
    const {success} = useSelector(state => state.orderPay)
    const { order } = useSelector(state => state.orderDetails)
    const { currentUser }= useSelector(state => state.user)
    const { id } = useParams();
    // console.log(id);

    useEffect(()=>{
       
      if (!currentUser) {
        history.push('/login')
      }
  
      const addPayPalScript = async () => {
        const { data: clientId } = await axios.get('/api/config/paypal')
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
        script.async = true
        script.onload = () => {
          setSdkReady(true)
        }
        document.body.appendChild(script)
      }
  
      if (!order || success || order._id !== id) {
        dispatch({ type: ORDER_PAY_RESET })
        // dispatch({ type: ORDER_DELIVER_RESET })
        dispatch(getOrderDetails(id))
      } else if (!order.isPaid) {
        if (!window.paypal) {
          addPayPalScript()
        } else {
          setSdkReady(true)
        }
      }
    },[id,dispatch, currentUser,history, order, success])


    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: car,
    };

    if ( !order) return <Loading />
    console.log(order);
    return (
        <div className='order_page' >
            <Lottie options={defaultOptions}
            height={900}
            width='100%'
            />
            <div className='order_page_container'>
              <div className='order_row'>
              {
                order.orderItems.map(item =>(
                  <CartRow inverted key={item.product} item={item} />
                ))
              }

              </div>
                <Orders 
                id={id} 
                orderDetails={order} 
                currentUser={currentUser} 
                sdkReady={sdkReady}/>
              </div>
        </div>
    )
}
