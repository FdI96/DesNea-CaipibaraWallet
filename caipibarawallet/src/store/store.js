import { configureStore } from "@reduxjs/toolkit";
import requestReducer from "../components/marcos/request/requestSlice";
import usersReducer from "../components/marcos/users/userSlice";

export const store = configureStore({
  reducer: {
    requests: requestReducer,
    users: usersReducer,
  },
});
