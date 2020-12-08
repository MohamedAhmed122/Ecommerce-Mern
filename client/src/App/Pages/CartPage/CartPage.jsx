import React, { useEffect } from 'react'
import { useParams, useLocation, useHistory} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'

import CustomButton from '../../Components/CustomButton/CustomButton';
import CartRow from '../../Components/CartRow/CartRow';
import Alert from '../../Common/Alert'

import './StyleCartPage.css'

import {addToCart} from '../../Redux/cart/CartAction'
import { calculateTotal } from '../../utilities/utility';



export default function CartPage() {
   const dispatch = useDispatch()
   const {carts } = useSelector(state => state.cart);
   const location = useLocation();
   const history = useHistory()
   const { id } = useParams();
   const qty = location.search ? Number(location.search.split('=')[1]) :1;

   useEffect(()=>{
       if(id){

           dispatch(addToCart(id , qty))
       }
   },[dispatch, id, qty])

   const handleGoBack = () =>  history.goBack()

   const handleCheckout = () => history.push('/login?redirect=shipping')


    return (
        <div className='cartPage'>
            {carts.length <= 0 &&  
                <div className=''> 
                    <Alert severity="info">Your Cart is Empty</Alert> 
                </div>
            }
            { 
                carts?.map(item =>(
                    <CartRow qty={qty} key={item.name} item={item}  />
                ))
            }
           { carts.length > 0 &&
                <>
                    <div className='cartPage_total'>
                        <p>Total {calculateTotal(carts)} $</p>
                    </div>
                    <div className='btn_group'>
                        <CustomButton inverted onClick={handleGoBack} title='GO Back' />
                        <CustomButton title='To Checkout' onClick={handleCheckout}/>
                    </div>
                </>
            }
        </div>
    )
}
