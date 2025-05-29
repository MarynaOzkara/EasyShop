import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

export const fetchAdminOrders = createAsyncThunk(
  "adminOrders/fetchOrders",
  async () => {
    const response = await axios.get(`${API_URL}/api/admin/orders`, {
      headers: { Authorization: USER_TOKEN },
    });
    return response.data;
  }
);
export const updateOrderStatus = createAsyncThunk(
  "adminOrders/updateOrderStatus",
  async ({ id, status }) => {
    const response = await axios.put(
      `${API_URL}/api/admin/orders/${id}`,
      { status },
      {
        headers: { Authorization: USER_TOKEN },
      }
    );
    return response.data;
  }
);
export const deleteOrder = createAsyncThunk(
  "adminOrders/deleteOrder",
  async (id) => {
    await axios.delete(`${API_URL}/api/admin/orders/${id}`, {
      headers: { Authorization: USER_TOKEN },
    });
    return id;
  }
);
const adminOrdersSlice = createSlice({
  name: "adminOrders",
  initialState: {
    orders: [],
    totalOrders: 0,
    totalSales: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminOrders.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchAdminOrders.fulfilled, (state, action) => {
        (state.loading = false),
          (state.orders = action.payload.orders),
          (state.totalOrders = action.payload.total);
        const totalSales = action.payload.orders.reduce((acc, order) => {
          return acc + order.totalPrice;
        }, 0);
        state.totalSales = totalSales;
      })
      .addCase(fetchAdminOrders.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(updateOrderStatus.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const index = state.orders.findIndex(
          (order) => order._id === updatedOrder._id
        );
        if (index !== -1) {
          state.orders[index] = updatedOrder;
        }
        state.loading = false;
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(deleteOrder.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});
export default adminOrdersSlice.reducer;
