import {
    ADMIN_CREATE_PRODUCT_ERROR, 
    ADMIN_CREATE_PRODUCT_REQUEST, 
    ADMIN_CREATE_PRODUCT_SUCCESS
} from './CreateProductTypes'


const createProductReducer = (state ={product:{}}, { type, payload})=>{

    switch(type){
        case ADMIN_CREATE_PRODUCT_REQUEST:
            return{
                loading: true
            }
            case ADMIN_CREATE_PRODUCT_SUCCESS:
            return{
                loading: false,
                product :payload,
            }
            case ADMIN_CREATE_PRODUCT_ERROR:
            return{
                error: payload,
                loading: false
            }
        default: return state
    }
}

export default createProductReducer