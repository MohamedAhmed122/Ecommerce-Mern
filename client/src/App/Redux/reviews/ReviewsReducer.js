import { 
    CREATE_REVIEW_ERROR, 
    CREATE_REVIEW_REQUEST, 
    CREATE_REVIEW_SUCCESS 
} from "./ReviewsType";


const reviewReducer = (state ={ success: false}, {type, payload}) =>{

    switch(type){
        case CREATE_REVIEW_REQUEST:
            return{
                loading: true
            }
        case CREATE_REVIEW_SUCCESS:
            return{
                success: true,
                loading: false,
                ...state
            }
        case CREATE_REVIEW_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}
export default reviewReducer