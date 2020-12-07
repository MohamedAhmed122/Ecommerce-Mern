const { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_ERROR } = require("./userTypes")


const initialState ={
    loading: false,
    error: null,
    listUsers: []
}


const listReducer = (state = initialState, {payload, type}) =>{

    switch(type){
        case USER_LIST_REQUEST:
            return{
                loading: true,
            }
        case USER_LIST_SUCCESS:
            return{
                loading: false,
                listUsers: payload
            }
        case USER_LIST_ERROR:
            return{
                error: payload,
                ...state
            }
        default: return state
    }
}

export default listReducer;