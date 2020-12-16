import axios from 'axios';

import { 
    CREATE_REVIEW_ERROR, 
    CREATE_REVIEW_REQUEST, 
    CREATE_REVIEW_SUCCESS 
} from "./ReviewsType";


 export const createReview = (productId, review) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: CREATE_REVIEW_REQUEST,
      })
  
      const {user :{ currentUser }} = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${currentUser.token}`,
        },
      }
  
      await axios.post(`/api/products/${productId}/reviews`, review, config)
  
      dispatch({
        type: CREATE_REVIEW_SUCCESS,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: CREATE_REVIEW_ERROR,
        payload: message,
      })
    }
  }
  