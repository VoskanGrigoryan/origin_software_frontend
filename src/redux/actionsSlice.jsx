import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getActions = createAsyncThunk(
  "actions/getActionsAsync",
  async () => {
    const resp = await fetch("http://localhost:4000/actions");
    if (resp.ok) {
      const actions = await resp.json();
      return { actions };
    }
  }
);

export const actionsSlice = createSlice({
  name: "actions",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getActions.fulfilled]: (state, action) => {
      return action.payload.actions;
    },
  },
});

export default actionsSlice.reducer;
