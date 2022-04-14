import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import {getOperations} from '../../../utils/darioAPI'

export const darioSlice = createSlice({
    name: 'operation',
    initialState : {
        balance: 0,
        status: 'idle',
        error: null,
        operations: []
    },  

    reducers: {
        updateBalance: (state, action) => {
            state.balance += action.payload
        },
        setBalance : (state, action) => {
            state.balance = action.payload
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchOperations.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchOperations.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // Add any fetched posts to the array
            state.operations = action.payload
          })
          .addCase(fetchOperations.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
          })
      }
})

export const fetchOperations = createAsyncThunk('operation/fetchOperations', async () => {
    const response = await getOperations()
    return response
  })

export const fetchOperationById = (state, operationId)  => (
  state.dario.operations.find(operation => operation.id == operationId)
)


export const { updateBalance, setBalance } = darioSlice.actions
export default darioSlice.reducer

