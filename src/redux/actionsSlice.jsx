import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getActions = createAsyncThunk(
//   "actions/getActionsAsync",
//   async () => {
//     const resp = await fetch(`http://localhost:4000/actions`);
//     if (resp.ok) {
//       const actions = await resp.json();
//       return { actions };
//     }
//   }
// );

export const actionsSlice = createSlice({
  name: "actions",
  initialState: {
    actions: [],
    loading: false,
    error: false,
  },
  reducers: {
    getAllActions: (state) => {
      state.loading = true;
    },
    getActionSuccess: (state, { payload }) => {
      state.actions = payload.data;
      state.loading = false;
      state.error = false;
    },
    getActionFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
  extraReducers: {
    // [getActions.fulfilled]: (state, action) => {
    //   return action.payload.actions;
    // },
  },
});

export const { getAllActions, getActionSuccess, getActionFailure } =
  actionsSlice.actions;

export default actionsSlice.reducer;

// Asynchronous thunk action
export function fetchAllActions() {
  return async (dispatch) => {
    dispatch(getAllActions());

    try {
      const response = await fetch(
        "https://api.twelvedata.com/stocks?source=docs&exchange=NYSE"
      );
      const data = await response.json();

      dispatch(getActionSuccess(data));
    } catch (error) {
      dispatch(getActionFailure());
    }
  };
}
