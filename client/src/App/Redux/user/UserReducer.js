import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "./userTypes";

const initialState ={
    currentUser: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const userReducer = (state =initialState, { type, payload } ) =>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                currentUser: payload,
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
                error: payload,
            }
        default: return state;
    }
}

export default userReducer;