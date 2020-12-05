import { 
    ORDER_DETAIL_REQUEST, 
    ORDER_DETAIL_SUCCESS, 
    ORDER_DETAIL_ERROR 
} from "./OrderTypes"

import axios from 'axios'

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_DETAIL_REQUEST,
      })
  
      const {user :{ currentUser }} = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders/${id}`, config)
      console.log(data)
      dispatch({
        type: ORDER_DETAIL_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: ORDER_DETAIL_ERROR,
        payload: message,
      })
    }
  }
  