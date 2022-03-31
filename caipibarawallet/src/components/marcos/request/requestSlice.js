import { client } from "../../../utils/apiClient";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const initialState = {
  requests: [],
  status: "idle",
  error: null,
};

export const fetchRequests = createAsyncThunk(
  "requests/fetchRequests",
  async () => {
    await sleep(2000);

    const response = await client.get("requests");
    return response.data;
  }
);

export const addNewRequests = createAsyncThunk(
  "request/addNewRequest",
  async (initialRequest) => {
    const response = await client.post("requests", initialRequest);
    return response.data;
  }
);

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    requestUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingRequest = state.requests.find(
        (request) => request.id === id
      );
      if (existingRequest) {
        existingRequest.title = title;
        existingRequest.content = content;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRequests.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRequests.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched requests to the array
        state.requests = state.requests.concat(action.payload);
      })
      .addCase(fetchRequests.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    //.addCase(fetchRequests.fulfilled, (state, action) => {
    //  state.requests.push(action.payload);
    //});
  },
});

export const { requestUpdated } = requestsSlice.actions;

export const selectAllRequests = (state) => state.requests.requests;

export default requestsSlice.reducer;
