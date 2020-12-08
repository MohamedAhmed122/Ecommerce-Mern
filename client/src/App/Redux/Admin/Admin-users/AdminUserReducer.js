import { ADMIN_GET_USER_ERROR, ADMIN_GET_USER_REQUEST, ADMIN_GET_USER_SUCCESS } from "./AdminUserTypes";


export const adminGetUserReducer = (state ={userDetails :{}}, {type, payload} ) =>{

    switch(type){
        case ADMIN_GET_USER_REQUEST:
            return {
                loading: true,
            }
        case ADMIN_GET_USER_SUCCESS:
            return{
                loading: false,
                userDetails: payload,
                ...state,
            }
        case ADMIN_GET_USER_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}