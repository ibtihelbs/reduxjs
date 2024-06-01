import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfPhones: 80,
};

const phoneSlice = createSlice({
  name: "phones",
  initialState,
  reducers: {
    buyPhone: (state) => {
      state.numberOfPhones--;
    },
    restockPhone: (state, action) => {
      state.numberOfPhones += action.payload;
    },
  },
});

export default phoneSlice.reducer;
export const { buyPhone, restockPhone } = phoneSlice.actions;
