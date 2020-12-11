import React, { useEffect } from 'react'

import {useDispatch, useSelector } from 'react-redux'

import { GetAllOrder } from "../../../Redux/Admin/Admin-get-orders/GetOrdersAction"


import Loading from '../../../Common/Loading'

import Paper from '@material-ui/core/Paper';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

import { 
    Button, 
    ButtonGroup, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow 
} from '@material-ui/core';



export default function OrdersPage({history}) {

    const dispatch = useDispatch()
    const { orders } = useSelector(state => state.getOrders) 
    const { currentUser } = useSelector(state => state.user)



    useEffect(()=>{
        if(currentUser.isAdmin === "true"){
            dispatch(GetAllOrder())
        }else{
            history.push('/login')
        }
    },[dispatch,history,currentUser ])

    if(!orders) return<Loading />
    return (
      
        <div className='users_table'>
            
            <TableContainer component={Paper} style={{marginBottom: 40}}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ORDER ID</TableCell>
                        <TableCell align='center'>PAYMENT</TableCell>
                        <TableCell align="right">COUNTRY</TableCell>
                        <TableCell align="right">PRICE</TableCell>
                        <TableCell align="right">PAID</TableCell>
                        <TableCell align="right">ACTION</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow key={order._id}>
                            <TableCell component="th" scope="row">
                                {order._id}
                            </TableCell>
                            <TableCell align="center">{order.paymentMethod}</TableCell>
                            <TableCell align="right">{order.shippingAddress.country}</TableCell>
                            <TableCell align="right">{order.totalPrice} $</TableCell>
                            <TableCell align="right">
                                {order.isPaid ?
                                <CancelIcon fontSize='large' style={{color:'red'}} />
                                :
                                <CheckCircleIcon fontSize='large' style={{color: 'green'}} /> 
                                }
                                
                            </TableCell>
                            <TableCell align="right">
                                <ButtonGroup variant="contained">
                                    <Button 
                                    style={{backgroundColor: 'green', color: 'white' }} 
                                    >
                                        <CheckCircleIcon />
                                    </Button>
                                </ButtonGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
