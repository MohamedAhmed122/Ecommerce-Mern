import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import {persistStore} from 'redux-persist'

// import logger from "redux-logger";

import {composeWithDevTools} from 'redux-devtools-extension'

import RootReducer from "./Root-Reducer";

const middleWare = [thunk];

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWare))) 


// export const persistor  = persistStore(store)