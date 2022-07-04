import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import DetailService from "../services/detail.service";

export const getCotizationDetails = createAsyncThunk(
  "details/getCotizationDetails",
  async (data, thunkAPI) => {
    try {
      return await DetailService.getCotization(data);
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const detailSlice = createSlice({
  name: "details",
  initialState: {},
  reducers: {},
  extraReducers: {
    [getCotizationDetails.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getCotizationDetails.rejected]: (state, action) => {
      return { message: "error" };
    },
  },
});

export default detailSlice.reducer;
