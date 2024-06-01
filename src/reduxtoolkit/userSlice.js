import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  error: "",
  status: "", // fetch:  loading, success, failed
};
const userFetch = createAsyncThunk("fetch/user", async (url) => {
  const res = await axios.get(url);
  return res.data;
});
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userFetch.fulfilled, (state, action) => {
        state.status = "success";
        state.users = action.payload;
      })
      .addCase(userFetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
export { userFetch };
