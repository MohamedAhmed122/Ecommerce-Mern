
import { 
    ORDER_DETAIL_REQUEST, 
    ORDER_DETAIL_SUCCESS, 
    ORDER_DETAIL_ERROR 
} from "./OrderDetailTypes"


const  orderDetailsReducer = (
    state = { loading: true, orderItems: [], shippingAddress: {} },
    action
  ) => {
    switch (action.type) {
      case ORDER_DETAIL_REQUEST:
        return {
          ...state,
          loading: true,
        }
      case ORDER_DETAIL_SUCCESS:
        return {
          loading: false,
          order: action.payload,
        }
      case ORDER_DETAIL_ERROR:
        return {
          loading: false,
          error: action.payload,
        }
      default:
        return state
    }
  }

export default orderDetailsReducer;