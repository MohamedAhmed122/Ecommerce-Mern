import {
    ORDER_PAY_ERROR,
    ORDER_PAY_REQUEST,
    ORDER_PAY_RESET,
    ORDER_PAY_SUCCESS
} from './OrderPayTypes'


const initialState ={
    loading: false,
    error: null,
    success: false
}


const OrderPaidReducer = (state = initialState, { type, payload}) =>{

    switch(type){
        case ORDER_PAY_REQUEST:
            return{
                loading: true
            }
        case ORDER_PAY_SUCCESS:
            return{
                loading: false,
                success: true
            }
        case ORDER_PAY_ERROR:
            return{
                loading: false,
                success: false,
                error: payload
            }
        case ORDER_PAY_RESET:
            return{}
        default: return state
    }
}

export default OrderPaidReducer;