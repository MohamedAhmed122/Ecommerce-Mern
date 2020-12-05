import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderDetails } from '../../Redux/OrdersRedux/OrderDetial/OrderDetailAction'

export default function OrderPage() {

    const dispatch = useDispatch()
    const { orderDetails } = useSelector(state => state.orderDetails)
    const { currentUser } = useSelector(state => state.user)
    console.log(currentUser.token);
    const { id } = useParams();
    // console.log(id);

    useEffect(()=>{
        dispatch(getOrderDetails(id))
    },[id, dispatch])

    console.log(orderDetails);

    return (
        <div style={{marginTop:100}}>
           {/* {
               orderItems.orderItems.map(item => <h1>{item.name}</h1>)
           } */}
           <h1>{currentUser.token}</h1>
        </div>
    )
}
