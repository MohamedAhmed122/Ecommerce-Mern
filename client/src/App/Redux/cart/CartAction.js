import axios from 'axios';
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_SHIPPING_ADDRESS } from "./CartType";



export const addToCart = (id, qty) => async (dispatch) => {
    const { data } = await axios.get(`/api/products/${id}`)
    console.log(data)
    dispatch({
      type: ADD_CART_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    })
}


export const removeItemFromCart = (id) => async (dispatch) =>{
  dispatch({type: REMOVE_CART_ITEM, payload: id})
}

export const SaveCartShippingAddress = (data) => async (dispatch) =>{
  dispatch({type: SAVE_SHIPPING_ADDRESS, payload: data})
}