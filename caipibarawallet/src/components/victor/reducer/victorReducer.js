import { createSlice } from '@reduxjs/toolkit'

export const victorReducer = createSlice({
  name: 'victor',
  initialState: {
    myMoney: 999,
  },
  reducers: {
    increment: (state) => {
      state.myMoney = state.myMoney + 1
    },
    decrement: (state) => {
      state.myMoney = state - 1
    },
    incrementAmount: (state, amount) => {
      state.myMoney = state + amount
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementAmount } = victorReducer.actions

export default victorReducer.reducer