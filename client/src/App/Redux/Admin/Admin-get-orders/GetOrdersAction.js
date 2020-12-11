import axios from 'axios'
import { 
    ADMIN_GET_ORDERS_ERROR, 
    ADMIN_GET_ORDERS_REQUEST, 
    ADMIN_GET_ORDERS_SUCCESS,
   
} from "./GetOrdersTypes";



export const GetAllOrder = ()  => async(dispatch, getState) =>{
    try {
        dispatch({
          type: ADMIN_GET_ORDERS_REQUEST,
        })
    
         const {user :{ currentUser }} = getState()
        const config = {
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
    
        const { data } = await axios.get('/api/orders', config)
       
        dispatch({
          type: ADMIN_GET_ORDERS_SUCCESS,
          payload: data,
        })
        console.log(data)

      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: ADMIN_GET_ORDERS_ERROR,
          payload: message,
        })
      }
 } 
