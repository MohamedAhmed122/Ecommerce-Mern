import { USER_PROFILE_ERROR, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS } from "./profileTypes";




const initialState = {
    userProfile: null,
    loading: false,
    error: null
}

const profileReducer = (state =initialState, {type, payload}) =>{

    switch(type){
        case USER_PROFILE_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_PROFILE_SUCCESS:
            return{
                ...state,
                loading: false,
                userProfile: payload
            }
        case USER_PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
            }
        default: return state;
    }
}

export default profileReducer;