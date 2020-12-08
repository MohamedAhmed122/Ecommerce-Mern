import { 
    ADMIN_GET_USER_ERROR, 
    ADMIN_GET_USER_REQUEST, 
    ADMIN_GET_USER_SUCCESS,
    ADMIN_UPDATE_USER_ERROR,
    ADMIN_UPDATE_USER_REQUEST,
    ADMIN_UPDATE_USER_SUCCESS 
} from "./AdminUserTypes";


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

export const adminUpdateUserReducer = (state ={success :false}, {type, payload} ) =>{

    switch(type){
        case ADMIN_UPDATE_USER_REQUEST:
            return {
                loading: true,
            }
        case ADMIN_UPDATE_USER_SUCCESS:
            return{
                loading: false,
                success: true,
            }
        case ADMIN_UPDATE_USER_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}