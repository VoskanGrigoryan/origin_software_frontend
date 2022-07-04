import { configureStore } from "@reduxjs/toolkit";
import actions from "./actionsSlice";
import userReducer from "./authSlice";
import userActionsReducer from "./userActionsSlice";
import actionDetail from "./detailSlice";

export default configureStore({
  reducer: {
    actions,
    user: userReducer,
    userActions: userActionsReducer,
    actionDetail,
  },
});
