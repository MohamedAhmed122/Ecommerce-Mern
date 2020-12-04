
import { 
    ORDER_DETAIL_REQUEST, 
    ORDER_DETAIL_SUCCESS, 
    ORDER_DETAIL_ERROR 
} from "./OrderTypes"

const initialState ={
    orderItems: {},
    loading:false,
    error: null,
 
}

const orderDetailsReducer = (state =initialState, {type, payload} ) =>{

    switch(type){
        case ORDER_DETAIL_REQUEST:
            return{
                loading: true,
                ...state,
            }
        case ORDER_DETAIL_SUCCESS:
            return{
                loading: false,
                orderItems: payload,
                ...state,
            }
        case ORDER_DETAIL_ERROR:
            return{
                loading: false,
                error: payload,
                ...state
            }
        default: return state
    }
}

export default orderDetailsReducer;