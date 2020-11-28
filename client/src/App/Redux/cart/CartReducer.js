import { addItemToCart } from './utils.js'
import { ADD_CART_ITEM, REMOVE_CART_ITEM } from "./CartType";

const initialState={
    cardItems:[]
}


const cartReducer = (state = initialState, {type,payload})=>{
    switch(type){
        case ADD_CART_ITEM:
            return{
                ...state,
                cardItems: addItemToCart(state.cardItems, payload)
            }
        case REMOVE_CART_ITEM:
            return{
                ...state,
                cardItems: state.cardItems.filter(item => item.id !== payload.id )
            }
        default: return state
    }
}

export default cartReducer;