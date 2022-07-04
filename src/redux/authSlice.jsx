import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";

const initialState = {
  // isError: false,
  // isLoading: false,
  // message: null,
  // user: undefined,
};

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await AuthService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const testFunction = createAsyncThunk(
  "auth/userData",
  async (user, thunkAPI) => {
    try {
      const data = localStorage.getItem("user");
      if (data) {
        return JSON.parse(data);
      }
    } catch (error) {
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

// export const logout = createAsyncThunk("auth/logout", async () => {
//   await authService.logout();
// });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(testFunction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.message = null;
        state.user = action.payload;
      });
    //   .addCase(logout.fulfilled, (state) => {
    //     state.user = null;
    //   });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
