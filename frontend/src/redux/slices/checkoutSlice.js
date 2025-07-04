import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "../instance";

export const createCheckout = createAsyncThunk(
  "checkout/createCheckout",
  async (checkoutdata, { rejectWithValue }) => {
    try {
      const response = await backend.post(`/api/checkout`, checkoutdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      rejectWithValue(error.response.data);
    }
  }
);
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkout: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createCheckout.pending, (state) => {
      (state.loading = true), (state.error = null);
    });
    builder.addCase(createCheckout.fulfilled, (state, action) => {
      (state.loading = false), (state.checkout = action.payload);
      state.error = null;
    });
    builder.addCase(createCheckout.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload.message);
    });
  },
});
export default checkoutSlice.reducer;
