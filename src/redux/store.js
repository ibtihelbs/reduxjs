import { reducer } from "./phones/reducer";
import { userReducer } from "./user/reducer";
import { combineReducers } from "redux";

import { createStore } from "redux";
const rootReducer = combineReducers({ user: userReducer, shop: reducer });
export const store = createStore(rootReducer);
