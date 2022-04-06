import { configureStore } from '@reduxjs/toolkit'
import fedeSlice from '../components/fede/Records/reducer/fedeReducer'
import darioReducer from '../components/dario/reducer/darioReducer'

export default configureStore({
  reducer: {
    fede: fedeSlice,
    dario: darioReducer
  }
})