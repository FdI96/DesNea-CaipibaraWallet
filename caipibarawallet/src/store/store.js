import { configureStore } from '@reduxjs/toolkit'
import fedeReducer from '../components/fede/Records/reducer/fedeReducer'

export default configureStore({
  reducer: {
    fede: fedeReducer
  }
})