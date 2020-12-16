
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
import listReducer, { userDeleteReducer } from './user/userListReducer'
import {adminGetUserReducer, adminUpdateUserReducer} from './Admin/Admin-users/AdminUserReducer'
import removeProductReducer from "./Admin/Admin-delete-product/RemoveProductReducer";
import createProductReducer from "./Admin/Admin-create-product/CreateProductReducer";
import updateProductReducer from "./Admin/Admin-update-product/updateProductReducer";
import getOrdersReducer from "./Admin/Admin-get-orders/GetOrdersReducer";
import reviewReducer from "./reviews/ReviewsReducer";

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
   usersList : listReducer,
   userDelete: userDeleteReducer,
   adminGetUser: adminGetUserReducer,
   adminUpdateUser:adminUpdateUserReducer,
   adminRemoveProduct :removeProductReducer,
   createProduct : createProductReducer,
   updateProduct :updateProductReducer,
   getOrders: getOrdersReducer,
   reviews: reviewReducer,
});
export default persistReducer(persistConfig, rootReducer);


// export default rootReducer