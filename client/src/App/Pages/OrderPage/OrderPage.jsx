import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../Common/Loading'
import Orders from '../../Components/Orders/Orders'
import { PayPalButton } from "react-paypal-button-v2";
import { getOrderDetails } from "../../Redux/Order/OrderDetial/OrderDetailAction"
import {ORDER_PAY_RESET} from '../../Redux/Order/OrderPay/OrderPayTypes'
import { payOrder } from '../../Redux/Order/OrderPay/OrderPayAction'
import { Card } from '@material-ui/core'
import './StyleOrderPage.css'

export default function OrderPage({history}) {

    const [sdkReady, setSdkReady] = useState(false)
    const dispatch = useDispatch()
    const {success} = useSelector(state => state.orderPay)
    const { orderDetails, isLoading } = useSelector(state => state.orderDetails)
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
  
      if (!orderDetails || success || orderDetails._id !== id) {
        dispatch({ type: ORDER_PAY_RESET })
        // dispatch({ type: ORDER_DELIVER_RESET })
        dispatch(getOrderDetails(id))
      } else if (!orderDetails.isPaid) {
        if (!window.paypal) {
          addPayPalScript()
        } else {
          setSdkReady(true)
        }
      }
    },[id,dispatch, currentUser,history, orderDetails, success])

    const handleSuccess =(result)=>{
      console.log(result);
      dispatch(payOrder(id, result))
    }

    if (isLoading || !orderDetails) return <Loading />

    return (
        <div className='order_page' >
          <Orders orderDetails={orderDetails} currentUser={currentUser} sdkReady={sdkReady}/>
          <Card className='order_page_card'>
            <div>
              <h3>Pay Now by PayPal</h3>
              {
                !orderDetails.isPaid &&
                !sdkReady ? <Loading /> : 
                <PayPalButton 
                style={{zIndex:0}} 
                amount={orderDetails.totalPrice} 
                onSuccess={handleSuccess}/>
              }

            </div>
          </Card>
        </div>
    )
}
