import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { server, axiosRequest } from '../../../../request'
import { client } from '../../../../utils/apiClient'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const initialState = {
  myMoney: 999,
  records:[],
  status: 'idle',
  error: null
}

export const fedeSlice = createSlice({
  name: 'fede',
  initialState,
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
    storeRecords: (state, records) => {
      state.records = records
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRecords.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchRecords.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.records = state.records.concat(action.payload)
      })
      .addCase(fetchRecords.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }


})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementAmount } = fedeSlice.actions

export default fedeSlice.reducer

export const selectStatus = state => state.fede.status

export const selectAllRecords = state => state.fede.records

export const selectRecordById = (state, recordId) => state.fede.records.find(record => record.id === recordId)

const getRecords = async () => {
  await sleep(3000)
  const options = {
    method: 'GET',
    headers: {},
    data: {}
  }
  const response = await axiosRequest(server + 'operations', options)
  return response.data
}

export const fetchRecords = createAsyncThunk('records/fetchRecords', () => getRecords())