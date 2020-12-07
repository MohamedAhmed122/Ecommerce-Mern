import axios from "axios"
import { USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "./userTypes"

export const getUserList = ()  => async(dispatch, getState) =>{
    try {
         dispatch({type: USER_LIST_SUCCESS})
 
         const {user :{ currentUser }} = getState()
 
         const config ={
             headers:{
                 Authorization: `Bearer ${currentUser.token}`,
             }
         }
         const { data } = await axios.put(`api/users`, config )
         dispatch({type: USER_LIST_REQUEST, payload: data})
         console.log(data)
 
     } catch (error) {
 
     dispatch({
         type: USER_LIST_ERROR,
         payload: error.response &&
          error.response.data.message ? error.response.data.message : error.message
         })
     }
 } 