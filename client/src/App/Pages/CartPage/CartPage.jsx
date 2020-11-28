import React, { useEffect } from 'react'
import { useParams, useLocation} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'

import {addToCart} from '../../Redux/cart/CartAction'
import CartRow from '../../Components/CartRow/CartRow';

export default function CartPage() {
   const dispatch = useDispatch()
   const {carts } = useSelector(state => state.cart);
   const location = useLocation();
   const { id } = useParams();
   const qty = location.search ? Number(location.search.split('=')[1]) :1;

   useEffect(()=>{
       if(id){

           dispatch(addToCart(id , qty))
       }
   },[dispatch, id, qty])
   console.log(id);
   console.log(carts);

    return (
        <div style={{marginTop: 90, display: 'flex'}}>
            <div style={{width: '70%'}}>
                { 
                    carts?.map(item =>(
                        <CartRow key={item.name} item={item}>
                            
                        </CartRow>
                    ))
                }
                
            </div>
            <div style={{flex: 0.25}}></div>
        </div>
    )
}
