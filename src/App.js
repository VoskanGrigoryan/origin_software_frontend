import React, { useEffect } from "react";
import AppRoutes from "./routes";
import { useDispatch } from "react-redux";
import { testFunction } from "./redux/authSlice";

const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const localStorageData = localStorage.getItem("user");
  //   if (localStorageData) {
  //     setAuthenticated(true);
  //   } else if (localStorageData === null) {
  //     setAuthenticated(false);
  //   }

  //   return () => {};
  // }, []);

  useEffect(() => {
    dispatch(testFunction());
  }, []);

  return <AppRoutes />;
};

export default App;
