import axios from 'axios'
import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userTypes";


export const userLogin = (email, password) => async(dispatch) =>{
    
    try {
        dispatch({ type: USER_LOGIN_REQUEST});
    
        const config ={
            header:{
                'content-types': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/login',
            {email, password}, config
        )

        dispatch({type: USER_LOGIN_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}