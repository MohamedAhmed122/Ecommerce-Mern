import {USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_ERROR} from './UsersListTypes'


const initialState ={
    loading: false,
    error: null,
    usersList: []
}


const listReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case USER_LIST_REQUEST:
            return{
                loading: true,
            }
        case USER_LIST_SUCCESS:
            return{
                loading: false,
                usersList: payload,
                ...state
            }
        case USER_LIST_ERROR:
            return{
                loading: false,
                error: payload,
            }
        default: return state
    }
}

export default listReducer;