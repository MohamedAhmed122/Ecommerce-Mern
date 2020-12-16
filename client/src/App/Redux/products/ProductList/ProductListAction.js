import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_ERROR} from './ProductListTypes'
import axios from 'axios'


export const productList =  (keyword='', pageNumber) => async(dispatch) =>{

    try {
        dispatch({type: PRODUCT_LIST_REQUEST})

        const { data } = await axios
            .get(`/api/products?keyword=${keyword}&pageNumber=${pageNumber}`);
            console.log(data)
        dispatch({type: PRODUCT_LIST_SUCCESS, payload : data})
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}