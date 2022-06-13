import { configureStore } from "@reduxjs/toolkit";
import actionsReducer from "./actionsSlice";
import userReducer from "./authSlice";
import userActionsReducer from "./userActionsSlice";

export default configureStore({
  reducer: {
    actions: actionsReducer,
    user: userReducer,
    userActions: userActionsReducer,
  },
});
