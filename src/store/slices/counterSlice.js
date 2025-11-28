import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchIncreamentAmount = createAsyncThunk(
  "counter/fetchIncreamentAmount",
  async (amount, thunkAPI) => {
    await new Promise((res) => setTimeout(res, 600));
    return amount;
  }
);

const initialState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncreamentAmount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIncreamentAmount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(fetchIncreamentAmount.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
