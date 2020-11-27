import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import logger from "redux-logger";

import {composeWithDevTools} from 'redux-devtools-extension'

import RootReducer from "./Root-Reducer";

const middleWare = [logger, thunk];

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middleWare)))