
import { combineReducers } from "redux";
import productListReducer from "./products/ProductList/ProductListReducer"
import ProductDetailReducer from "./products/ProductListDetails/ProductDetailsReducer";



const rootReducer = combineReducers({
   productList :productListReducer,
   productDetail:ProductDetailReducer
});

export default rootReducer;