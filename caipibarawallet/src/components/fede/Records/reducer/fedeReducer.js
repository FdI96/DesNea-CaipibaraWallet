import { createSlice } from '@reduxjs/toolkit'

export const fedeReducer = createSlice({
  name: 'fede',
  initialState: {
    values: {
      id: '',
      concept: '',
      amount: '',
      date: '00/00/0000',
      type: ''
    },
  },
  reducers: {
    addRecord: (state) => {
      values = state
    },
    deleteRecord: (state) => {
      values = state
    },
    updateRecord: (state) => {
      values = state
    },
  },
})

// Action creators are generated for each case reducer function
export const { addRecord, deleteRecord, updateRecord } = fedeReducer.actions

export default fedeReducer.reducer