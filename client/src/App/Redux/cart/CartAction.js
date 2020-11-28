import axios from 'axios';
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./CartType";



export const addItemToCart = (id, qty) => async (dispatch) =>{
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({ 
        type: ADD_CART_ITEM, 
        payload:{
            name: data.name,
            image: data.image,
            rating: data.rating,
            id: data._id,
            price: data.price,
            countInStock: data.countInStock,
            qty,

         } 
    })
 }