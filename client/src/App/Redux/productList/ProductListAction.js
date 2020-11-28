import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_ERROR} from './ProductListTypes'


export const productListRequest = () =>({
    
    type: PRODUCT_LIST_REQUEST
})


export const productListSuccess = (product) =>({
    
    type: PRODUCT_LIST_SUCCESS,
    payload: product
})


export const productListError = (error) =>({
    
    type: PRODUCT_LIST_ERROR,
    payload: error
})

