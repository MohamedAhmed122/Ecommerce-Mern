import axios from 'axios';

import { 
    CREATE_REVIEW_ERROR, 
    CREATE_REVIEW_REQUEST, 
    CREATE_REVIEW_SUCCESS 
} from "./ReviewsType";

export const createReview = (id, review) => async(dispatch, getState) =>{
    try {
         dispatch({type: CREATE_REVIEW_REQUEST})
 
         const {user :{ currentUser }} = getState()
 
         const config ={
             headers:{
                 Authorization: `Bearer ${currentUser.token}`,
                 'Content-Type': 'application/json',
             }
         }
         
         const { data } = await axios.post(`api/products/${id}/reviews`, review ,config )
         console.log(data)
         dispatch({type: CREATE_REVIEW_SUCCESS})
 
     } catch (error) {
 
     dispatch({
         type: CREATE_REVIEW_ERROR,
         payload: error.response &&
          error.response.data.message ? error.response.data.message : error.message
         })
     }
 } 