import {
    USER_LIST_REQUEST, 
    USER_LIST_SUCCESS, 
    USER_LIST_ERROR,
    ADMIN_DELETE_USER
} from './UsersListTypes'


const initialState ={
    loading: false,
    error: null,
    users: [],
    success: false
}


const listReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case USER_LIST_REQUEST:
            return{
                loading: true,
                ...state,
            }
        case USER_LIST_SUCCESS:
            return{
                loading: false,
                users: payload,
                ...state
            }
        case USER_LIST_ERROR:
            return{
                loading: false,
                error: payload,
                ...state, 
            }
        case ADMIN_DELETE_USER:
            return{
                loading: false,
                success: true,
                ...state,
            }
        default: return state
    }
}

export default listReducer;