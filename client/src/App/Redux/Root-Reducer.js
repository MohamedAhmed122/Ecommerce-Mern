
import { combineReducers } from "redux";
import productListReducer from "./productList/ProductListReducer";



const rootReducer = combineReducers({
   productList :productListReducer
});

export default rootReducer;