import axios from "axios";

import { 
  ADMIN_GET_USER_ERROR, 
  ADMIN_GET_USER_REQUEST, 
  ADMIN_GET_USER_SUCCESS,
  ADMIN_UPDATE_USER_ERROR,
  ADMIN_UPDATE_USER_REQUEST,
  ADMIN_UPDATE_USER_SUCCESS 
} from "./AdminUserTypes";


export const AdminGetUserById = (id)  => async(dispatch, getState) =>{
    try {
        dispatch({
          type: ADMIN_GET_USER_REQUEST,
        })
    
         const {user :{ currentUser }} = getState()
        const config = {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
    
        const { data } = await axios.get(`/api/users/${id}`, config)
       
        dispatch({
          type: ADMIN_GET_USER_SUCCESS,
          payload: data,
        })
        console.log(data)

      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: ADMIN_GET_USER_ERROR,
          payload: message,
        })
      }
 } 


 export const AdminUpdateUserById = (id,  email, name, isAdmin)  => async(dispatch, getState) =>{
  try {
      dispatch({
        type: ADMIN_UPDATE_USER_REQUEST,
      })
  
       const {user :{ currentUser }} = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
        },
      }
  
       await axios.put(`/api/users/${id}`, {email, name, isAdmin}, config)
     
      dispatch({type: ADMIN_UPDATE_USER_SUCCESS})
      

    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: ADMIN_UPDATE_USER_ERROR,
        payload: message,
      })
    }
} 
