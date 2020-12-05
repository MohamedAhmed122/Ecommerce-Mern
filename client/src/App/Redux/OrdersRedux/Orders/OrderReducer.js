import { 
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS, 
    ORDER_CREATE_ERROR 
} from "./OrderTypes"

const initialState ={
    order: {},
    loading:false,
    error: null,
    success: false
}

const orderReducer = (state =initialState, {type, payload} ) =>{

    switch(type){
        case ORDER_CREATE_REQUEST:
            return{
                loading: true,
                ...state,
            }
        case ORDER_CREATE_SUCCESS:
            return{
                loading: false,
                order: payload,
                success: true,
            }
        case ORDER_CREATE_ERROR:
            return{
                loading: false,
                error: payload,
                ...state
            }
        default: return state
    }
}

export default orderReducer;