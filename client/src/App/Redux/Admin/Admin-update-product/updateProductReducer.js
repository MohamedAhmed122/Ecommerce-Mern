import {
    ADMIN_UPDATE_PRODUCT_ERROR, 
    ADMIN_UPDATE_PRODUCT_REQUEST, 
    ADMIN_UPDATE_PRODUCT_SUCCESS
} from './updateProductTypes'


const updateProductReducer = (state ={updatedProduct:{}}, { type, payload})=>{

    switch(type){
        case ADMIN_UPDATE_PRODUCT_REQUEST:
            return{
                loading: true,
                success: false,
            }
            case ADMIN_UPDATE_PRODUCT_SUCCESS:
            return{ 
                loading: false,
                updatedProduct :payload,
                success: true,
            }
            case ADMIN_UPDATE_PRODUCT_ERROR:
            return{
                error: payload,
                loading: false,
                success: false,
            }
        default: return state
    }
}

export default updateProductReducer