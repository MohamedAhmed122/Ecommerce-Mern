
import { 
    ORDER_DETAIL_REQUEST, 
    ORDER_DETAIL_SUCCESS, 
    ORDER_DETAIL_ERROR 
} from "./OrderDetailTypes"

const initialState ={
    orderDetails: {},
    isLoading: false,
    error: null,
 
}

const orderDetailsReducer = (state =initialState, {type, payload} ) =>{

    switch(type){
        case ORDER_DETAIL_REQUEST:
            return{ 
                isLoading: true,
                ...state,
            }
        case ORDER_DETAIL_SUCCESS:
            return{
                isLoading: false,
                orderDetails: payload,
                
            }
        case ORDER_DETAIL_ERROR:
            return{
                isLoading: false,
                error: payload,
                ...state
            }
        default: return state
    }
}

export default orderDetailsReducer;