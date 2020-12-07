import axios from "axios"
import {USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_ERROR} from './UsersListTypes'

export const getUserList = ()  => async(dispatch, getState) =>{
    try {
         dispatch({type: USER_LIST_REQUEST})
 
         const {user :{ currentUser }} = getState()
 
         const config ={
             headers:{
                 Authorization: `Bearer ${currentUser.token}`,
             }
         }
         const { data } = await axios.get('/api/users', config)
         dispatch({type: USER_LIST_SUCCESS , payload: data})
         console.log(data)
 
     } catch (error) {
 
     dispatch({
         type: USER_LIST_ERROR,
         payload: error.response &&
          error.response.data.message ? error.response.data.message : error.message
         })
     }
 } 