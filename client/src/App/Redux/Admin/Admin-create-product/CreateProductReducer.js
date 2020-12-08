import {
    ADMIN_CREATE_PRODUCT_ERROR, 
    ADMIN_CREATE_PRODUCT_REQUEST, 
    ADMIN_CREATE_PRODUCT_SUCCESS
} from './CreateProductTypes'


const createProductReducer = (state ={product:{}}, { type, payload})=>{

    switch(type){
        case ADMIN_CREATE_PRODUCT_REQUEST:
            return{
                loading: true,
                success: false,
            }
            case ADMIN_CREATE_PRODUCT_SUCCESS:
            return{ 
                loading: false,
                success: true,
                product :payload,
            }
            case ADMIN_CREATE_PRODUCT_ERROR:
            return{
                error: payload,
                loading: false,
                success: false,
            }
        default: return state
    }
}

export default createProductReducer