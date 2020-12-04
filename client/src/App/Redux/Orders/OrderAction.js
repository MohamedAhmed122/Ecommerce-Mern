import { 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_ERROR 
} from "./OrderTypes"

import axios from 'axios'


export const updateUserProfile = (order) => async(dispatch, getState) =>{
    try {
         dispatch({type: ORDER_CREATE_REQUEST})
 
         const {user :{ currentUser }} = getState()
 
         const config ={
             headers:{
                 Authorization: `Bearer ${currentUser.token}`,
                 'Content-Type': 'application/json',
             }
         }
         const { data } = await axios.post(`api/orders`,order, config )
         
         dispatch({type: ORDER_CREATE_SUCCESS, payload: data})
         console.log(data)
 
     } catch (error) {
 
     dispatch({
         type: ORDER_CREATE_ERROR,
         payload: error.response &&
          error.response.data.message ? error.response.data.message : error.message
        })
    }
}
