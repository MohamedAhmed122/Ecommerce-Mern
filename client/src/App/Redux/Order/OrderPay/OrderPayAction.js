import {
    ORDER_PAY_ERROR,
    ORDER_PAY_REQUEST,
    ORDER_PAY_RESET,
    ORDER_PAY_SUCCESS
} from './OrderPayTypes'

import axios from 'axios'

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_PAY_REQUEST,
      })
  
      const {user :{ currentUser }} = getState()
  
      const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${currentUser.token}`,
        },
      }
  
      const { data } = await axios.put(`/api/orders/${id}/pay`,paymentResult, config)
      console.log(data)
      dispatch({
        type: ORDER_PAY_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      dispatch({
        type: ORDER_PAY_ERROR,
        payload: message,
      })
    }
}
  