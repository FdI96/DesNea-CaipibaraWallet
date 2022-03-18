import { configureStore } from '@reduxjs/toolkit'
import fedeReducer from '../components/fede/Records/reducer/fedeReducer'
import darioReducer from '../components/dario/reducer/darioReducer'

export default configureStore({
  reducer: {
    fede: fedeReducer,
    dario: darioReducer
  }
})