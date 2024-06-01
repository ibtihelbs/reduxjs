// import phoneSlice.reducer from ./phoneSlice.js
import phoneReducer from "./phoneSlice";
import userReducer from "./userSlice";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
export const store = configureStore(
  {
    reducer: { phone: phoneReducer, users: userReducer },
  },
  applyMiddleware(thunk)
);
