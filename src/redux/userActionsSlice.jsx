import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ActionService from "../services/actions.service";

export const getUserActions = createAsyncThunk(
  "actions/getUserActions",
  async (data, thunkAPI) => {
    try {
      return await ActionService.getUserActions(data);
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

export const addUserAction = createAsyncThunk(
  "actions/addUserAction",
  async (data, thunkAPI) => {
    try {
      const result = await ActionService.newUserAction(data);
      thunkAPI.dispatch(
        getUserActions({
          user_id: 1,
        })
      );
      return result;
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

export const removeUserAction = createAsyncThunk(
  "actions/removeUserAction",
  async (data, thunkAPI) => {
    try {
      const result = await ActionService.deleteUserAction(data);
      //user_id value is hardcoded because there is no register, only login functionality
      thunkAPI.dispatch(
        getUserActions({
          user_id: 1,
        })
      );

      return result;
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

export const actionsSlice = createSlice({
  name: "actions",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getUserActions.fulfilled]: (state, action) => {
      return action.payload;
    },
    [getUserActions.rejected]: (state, action) => {
      return { message: "error" };
    },
    [addUserAction.fulfilled]: (state, action) => {
      // return [...state, action.payload];
      return state;
    },
    [addUserAction.rejected]: (state, action) => {
      return { message: "error" };
    },

    [removeUserAction.fulfilled]: (state, action) => {
      return state;
    },
    [removeUserAction.rejected]: (state, action) => {
      return { message: "error" };
    },
  },
});

export default actionsSlice.reducer;
