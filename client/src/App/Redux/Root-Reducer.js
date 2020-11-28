
import { combineReducers } from "redux";

// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import productListReducer from "./products/ProductList/ProductListReducer"
import ProductDetailReducer from "./products/ProductListDetails/ProductDetailsReducer";
import CartReducer from './cart/CartReducer'


// const persistConfig = {
//    key: "root",
//    storage,
//    whiteList: ["cart"],
//  };

const rootReducer = combineReducers({
   productList :productListReducer,
   productDetail:ProductDetailReducer,
   cart: CartReducer,
});

export default rootReducer;
