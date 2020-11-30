import axios from 'axios' 
import { 
    USER_PROFILE_ERROR, 
    USER_PROFILE_REQUEST, 
    USER_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_ERROR,
    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS
} from "./profileTypes";


export const getUserProfile = (id ='profile', ) => async(dispatch, getState) =>{
   try {
        dispatch({type: USER_PROFILE_REQUEST})

        const {user :{ currentUser }} = getState()

        const config ={
            headers:{
                Authorization: `Bearer ${currentUser.token}`,
                'Content-Type': 'application/json',
            }
        }
        const { data } = await axios.get(`api/users/profile`,config )
        dispatch({type: USER_PROFILE_SUCCESS, payload: data})

    } catch (error) {

    dispatch({
        type: USER_PROFILE_ERROR,
        payload: error.response &&
         error.response.data.message ? error.response.data.message : error.message
        })
    }
} 



export const updateUserProfile = (id ='profile', userInfo ) => async(dispatch, getState) =>{
    try {
         dispatch({type: USER_UPDATE_PROFILE_REQUEST})
 
         const {user :{ currentUser }} = getState()
 
         const config ={
             headers:{
                 Authorization: `Bearer ${currentUser.token}`,
                 'Content-Type': 'application/json',
             }
         }
         const { data } = await axios.put(`api/users/${id}`,userInfo, config )
         dispatch({type: USER_UPDATE_PROFILE_SUCCESS, payload: data})
         console.log(data)
 
     } catch (error) {
 
     dispatch({
         type: USER_UPDATE_PROFILE_ERROR,
         payload: error.response &&
          error.response.data.message ? error.response.data.message : error.message
         })
     }
 } 
 

// axios.interceptors.request.use(
//     config =>{
//         config.headers.Authorization =  `Bearer ${currentUser.token}`;
//         return config;
//     },
//     error => Promise.reject(error)
// )