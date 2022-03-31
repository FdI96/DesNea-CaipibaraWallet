import { createSlice } from '@reduxjs/toolkit'

export const fedeReducer = createSlice({
  name: 'fede',
  initialState: {
    myMoney: 999,
  },
  reducers: {
    increment: (state) => {
      state.myMoney = state.myMoney + 1
    },
    decrement: (state) => {
      state.myMoney = state.myMoney - 1
    },
    incrementAmount: (state, amount) => {
      state.myMoney = state + amount
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementAmount } = fedeReducer.actions

export default fedeReducer.reducer