import { configureStore } from "@reduxjs/toolkit";
import actions from "./actionsSlice";
import userReducer from "./authSlice";
import userActionsReducer from "./userActionsSlice";

export default configureStore({
  reducer: {
    actions,
    user: userReducer,
    userActions: userActionsReducer,
  },
});
