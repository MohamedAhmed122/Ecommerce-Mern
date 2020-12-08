import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_ERROR} from './ProductListTypes'


const initialState ={
    products : [],
    loading: false,
    error: null,
}

const productListReducer = (state = initialState, {type, payload}) =>{

    switch(type){
        case PRODUCT_LIST_REQUEST:
            return{
                ...state, 
                loading: true
            }
        case PRODUCT_LIST_SUCCESS:
            return{
                ...state,
                loading: false,
                products: payload,
            }
        case PRODUCT_LIST_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default: return state;
    }
}

export default productListReducer;