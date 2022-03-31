import { createSlice } from '@reduxjs/toolkit'

export const darioSlice = createSlice({
    name: 'darioReducer',
    initialState : {
        balance: 0,
        counter: 0
    },  

    reducers: {
        updateBalance: (state, action) => {
            state.balance += action.payload
        },
        setBalance : (state, action) => {
            state.balance = action.payload
        },
        incrementCounter: (state) => {
            state.counter += 1;
        }
    }
})

export const { updateBalance, incrementCounter, setBalance } = darioSlice.actions
export default darioSlice.reducer

