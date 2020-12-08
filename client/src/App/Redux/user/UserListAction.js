import axios from "axios"
import {
    USER_LIST_REQUEST, 
    USER_LIST_SUCCESS, 
    USER_LIST_ERROR,
    USER_DELETE_REQUEST,
    USER_DELETE_SUCCESS,
    USER_DELETE_ERROR
} from './UsersListTypes'

export const getUserList = ()  => async(dispatch, getState) =>{
    try {
        dispatch({
          type: USER_LIST_REQUEST,
        })
    
         const {user :{ currentUser }} = getState()
        const config = {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
    
        const { data } = await axios.get(`/api/users`, config)
    
        dispatch({
          type: USER_LIST_SUCCESS,
          payload: data,
        })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: USER_LIST_ERROR,
          payload: message,
        })
      }
 } 


 export const adminDeleteUser = (id) => async (dispatch, getState) =>{
    try {
        dispatch({
          type: USER_DELETE_REQUEST,
        })
    
        const {user :{ currentUser }} = getState()
        const config = {
          headers: {
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
    
        await axios.delete(`/api/users/${id}`, config)
    
        dispatch({ type: USER_DELETE_SUCCESS })
      } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: USER_DELETE_ERROR,
          payload: message,
        })
      }
 }
