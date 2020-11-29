
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productListReducer from "./products/ProductList/ProductListReducer"
import ProductDetailReducer from "./products/ProductListDetails/ProductDetailsReducer";
import CartReducer from './cart/CartReducer'
import userReducer from "./user/UserReducer";

const persistConfig = {
   key: "cart",
   storage,
   whiteList: ["cart"],
 };
 
const rootReducer = combineReducers({
   productList :productListReducer,
   productDetail:ProductDetailReducer,
   cart: CartReducer,
   user: userReducer,
});
export default persistReducer(persistConfig, rootReducer);


// export default persistReducer(persistConfig, rootReducer);


// export default rootReducer