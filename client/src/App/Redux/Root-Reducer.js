
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productListReducer from "./products/ProductList/ProductListReducer"
import ProductDetailReducer from "./products/ProductListDetails/ProductDetailsReducer";
import CartReducer from './cart/CartReducer'
import profileReducer from './profile/profileReducer'
import userReducer from "./user/UserReducer";
import orderReducer from "./Order/Orders/OrderReducer"
import orderDetailsReducer from "./Order/OrderDetial/OrderDetailReducer"
import orderPayReducer from './Order/OrderPay/OrderPayReducer'

const persistConfig = {
   key: "cart",
   storage,
   whiteList: ["cart","user"],
 };
 
const rootReducer = combineReducers({
   productList :productListReducer,
   productDetail:ProductDetailReducer,
   cart: CartReducer,
   user: userReducer,
   profile : profileReducer,
   orders: orderReducer,
   orderDetails: orderDetailsReducer, 
   orderPay: orderPayReducer,
});
export default persistReducer(persistConfig, rootReducer);


// export default rootReducer