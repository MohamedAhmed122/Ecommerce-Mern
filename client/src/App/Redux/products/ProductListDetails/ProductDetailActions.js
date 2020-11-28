import { PRODUCT_DETAIL_ERROR, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS } from "./ProductDetailType";
import axios from 'axios'


export const productDetail = (id) => async(dispatch) =>{

    try {
        dispatch({type: PRODUCT_DETAIL_REQUEST})

        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({type: PRODUCT_DETAIL_SUCCESS, payload : data})
        
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAIL_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}