import {
    ADMIN_REMOVE_PRODUCT_ERROR, 
    ADMIN_REMOVE_PRODUCT_REQUEST, 
    ADMIN_REMOVE_PRODUCT_SUCCESS
} from './RemoveProductTypes'


const removeProductReducer = (state ={success: false}, {type, payload}) =>{

    switch(type){
        case ADMIN_REMOVE_PRODUCT_REQUEST:
            return{
                loading: true
            }
        case ADMIN_REMOVE_PRODUCT_SUCCESS:
            return{
                loading: false,
                success: true
            }
        case ADMIN_REMOVE_PRODUCT_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default removeProductReducer;