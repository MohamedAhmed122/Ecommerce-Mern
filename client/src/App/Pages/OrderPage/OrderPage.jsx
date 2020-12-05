import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../Common/Loading'
import Orders from '../../Components/Orders/Orders'
import { getOrderDetails } from "../../Redux/Order/OrderDetial/OrderDetailAction"

export default function OrderPage() {

    const dispatch = useDispatch()
    const { orderDetails, isLoading } = useSelector(state => state.orderDetails)
    const { currentUser }= useSelector(state => state.user)
    const { id } = useParams();
    // console.log(id);

    useEffect(()=>{
        dispatch(getOrderDetails(id))
    },[id, dispatch])

    
    if (isLoading) return <Loading />
    console.log(orderDetails);
    return (
        <div style={{marginTop:100}}>
          <Orders orderDetails={orderDetails} currentUser={currentUser}/>
        </div>
    )
}
