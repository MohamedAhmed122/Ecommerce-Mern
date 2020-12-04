// import { addItemToCart } from './utils.js'
import { ADD_CART_ITEM, REMOVE_CART_ITEM, SAVE_SHIPPING_ADDRESS } from "./CartType";

const initialState={
    carts:[],
    shippingAddress: {},
}


const cartReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ADD_CART_ITEM:
            const item = payload

            const existItem = state.carts.find((x) => x.product === item.product)
      
            if (existItem) {
              return {
                ...state,
                carts: state.carts.map((x) =>
                  x.product === existItem.product ? item : x
                ),
              }
            } else {
              return {
                ...state,
                carts: [...state.carts, item],
              }
            }
        case REMOVE_CART_ITEM:
          return {
            ...state,
            carts: state.carts.filter((x) => x.product !== payload),
          }
        case SAVE_SHIPPING_ADDRESS:
          return{
            ...state,
            shippingAddress: payload
          }
        default: return state
    }
}

export default cartReducer;