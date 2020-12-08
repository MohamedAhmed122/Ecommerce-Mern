import axios from "axios"

import {
    ADMIN_CREATE_PRODUCT_ERROR, 
    ADMIN_CREATE_PRODUCT_REQUEST, 
    ADMIN_CREATE_PRODUCT_SUCCESS
} from './CreateProductTypes'


export const adminDeleteProduct = (productDetail) => async (dispatch, getState) =>{
    try {
        dispatch({
          type: ADMIN_CREATE_PRODUCT_REQUEST,
        })
    
        const {user :{ currentUser }} = getState()
        const config = {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
    
        const { data } = await axios.post(`/api/products/`, productDetail, config)
    
        dispatch({ type: ADMIN_CREATE_PRODUCT_SUCCESS, payload: data })
        console.log(data)

      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: ADMIN_CREATE_PRODUCT_ERROR,
          payload: message,
        })
      }
 }
