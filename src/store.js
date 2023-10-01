// redux-toolkit
import { configureStore } from "@reduxjs/toolkit";
// redux
import userReducer from "./redux/userSlice";
const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
