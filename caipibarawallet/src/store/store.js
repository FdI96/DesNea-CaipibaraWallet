import { configureStore } from '@reduxjs/toolkit'
import fedeReducer from '../components/fede/Records/reducer/fedeReducer'
import victorReducer from '../components/victor/reducer/victorReducer'
import darioReducer from '../components/dario/reducer/darioReducer'
import requestReducer from "../components/marcos/request/requestSlice";
import usersReducer from "../components/marcos/users/userSlice";

export default configureStore({
  reducer: {
    fede: fedeReducer,
    victor: victorReducer,
    dario: darioReducer,
    marcosRequests: requestReducer,
    marcosUsers: usersReducer,
  },
});
