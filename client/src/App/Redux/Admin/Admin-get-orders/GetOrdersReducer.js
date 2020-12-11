import { 
    ADMIN_GET_ORDERS_ERROR, 
    ADMIN_GET_ORDERS_REQUEST, 
    ADMIN_GET_ORDERS_SUCCESS,
   
} from "./GetOrdersTypes";


const getOrdersReducer = (state ={orders :[]}, {type, payload} ) =>{

    switch(type){
        case ADMIN_GET_ORDERS_REQUEST:
            return {
                loading: true,
            }
        case ADMIN_GET_ORDERS_SUCCESS:
            return{
                loading: false,
                orders: payload,
                ...state,
            }
        case ADMIN_GET_ORDERS_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default getOrdersReducer;