import { PRODUCT_DETAIL_ERROR, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "./ProductDetailType";


const initialState ={
    product: {},
    loading: false,
    error: null
}


const ProductDetailReducer  = (state = initialState, {type, payload}) =>{

    switch(type){
        case PRODUCT_DETAIL_REQUEST:
            return{
                ...state,
                loading: true
            }
        case PRODUCT_DETAIL_SUCCESS:
            return{
                ...state,
                product: payload,
                loading:false
            }
        case PRODUCT_DETAIL_ERROR:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default: return state
    }
}


export default ProductDetailReducer;