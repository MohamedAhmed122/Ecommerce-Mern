import axios from 'axios' 
import { USER_PROFILE_ERROR, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "./profileTypes";


export const getUserProfile = (id ='profile', token) => async(dispatch) =>{
   try {
        dispatch({type: USER_PROFILE_REQUEST})

        const config ={
            header:{
                'content-types': 'application/json',
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.get(`api/users/${id}`, config)

        dispatch({type: USER_PROFILE_SUCCESS, payload: data})
   } catch (error) {

    dispatch({
        type: USER_PROFILE_ERROR,
        payload: error.response &&
         error.response.data.message ? error.response.data.message : error.message
    })
   }
} 