import { configureStore } from '@reduxjs/toolkit'
import fedeReducer from '../components/fede/Records/reducer/fedeReducer'
import victorReducer from '../components/victor/reducer/victorReducer'

export default configureStore({
  reducer: {
    fede: fedeReducer,
    victor: victorReducer
  }
})