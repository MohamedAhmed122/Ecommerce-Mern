import { 
    USER_PROFILE_ERROR, 
    USER_PROFILE_REQUEST, 
    USER_PROFILE_SUCCESS,
    USER_UPDATE_PROFILE_ERROR,
    USER_UPDATE_PROFILE_REQUEST, 
    USER_UPDATE_PROFILE_SUCCESS
} from "./profileTypes";




const initialState = {
    userProfile: null,
    loading: false,
    success: false,
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
                userProfile: payload,
                success: true,
            }
        case USER_PROFILE_ERROR:
            return{
                ...state,
                error: payload,
                loading: false,
                success: false,
            }
            case USER_UPDATE_PROFILE_REQUEST:
                return{
                    ...state,
                    loading: true
                }
            case USER_UPDATE_PROFILE_SUCCESS:
                return{
                    ...state,
                    loading: false,
                    userProfile: payload
                }
            case USER_UPDATE_PROFILE_ERROR:
                return{
                    ...state,
                    error: payload,
                    loading: false,
                }
        default: return state;
    }
}

export default profileReducer;