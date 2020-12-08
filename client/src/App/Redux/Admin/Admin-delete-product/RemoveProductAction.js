import axios from 'axios'
import {
    ADMIN_REMOVE_PRODUCT_ERROR, 
    ADMIN_REMOVE_PRODUCT_REQUEST, 
    ADMIN_REMOVE_PRODUCT_SUCCESS
} from './RemoveProductTypes'

export const adminDeleteProduct = (id) => async (dispatch, getState) =>{
    try {
        dispatch({
          type: ADMIN_REMOVE_PRODUCT_REQUEST,
        })
    
        const {user :{ currentUser }} = getState()
        const config = {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
    
        await axios.delete(`/api/products/${id}`, config)
    
        dispatch({ type: ADMIN_REMOVE_PRODUCT_SUCCESS })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: ADMIN_REMOVE_PRODUCT_ERROR,
          payload: message,
        })
      }
 }
