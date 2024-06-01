// import phoneSlice.reducer from ./phoneSlice.js
import phoneReducer from "./phoneSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({ reducer: { phone: phoneReducer } });
