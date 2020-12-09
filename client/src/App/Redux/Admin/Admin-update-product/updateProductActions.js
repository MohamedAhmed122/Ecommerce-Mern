import axios from "axios"

import {
    ADMIN_UPDATE_PRODUCT_ERROR, 
    ADMIN_UPDATE_PRODUCT_REQUEST, 
    ADMIN_UPDATE_PRODUCT_SUCCESS
} from './updateProductTypes'


export const adminUpdateProduct = (id, product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADMIN_UPDATE_PRODUCT_REQUEST,
    })

    const {user :{ currentUser }} = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${currentUser.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/products/${id}`,
      product,
      config
    )

    dispatch({
      type: ADMIN_UPDATE_PRODUCT_SUCCESS,
      payload: data,
    })
    // dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    dispatch({
      type: ADMIN_UPDATE_PRODUCT_ERROR,
      payload: message,
    })
  }
}
 
