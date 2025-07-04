import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "../instance";

const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async () => {
    const response = await backend.get(`/api/admin/products`, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });

    return response.data;
  }
);
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData) => {
    const response = await backend.post(`/api/admin/products`, productData, {
      headers: {
        Authorization: USER_TOKEN,
      },
    });
    return response.data;
  }
);
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }) => {
    const response = await backend.put(
      `/api/admin/products/${id}`,
      productData,
      { headers: { Authorization: USER_TOKEN } }
    );
    return response.data;
  }
);
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id) => {
    await backend.delete(`/api/admin/products/${id}`, {
      headers: { Authorization: USER_TOKEN },
    });
    return id;
  }
);
const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    totalProducts: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        (state.loading = false),
          (state.products = action.payload.products),
          (state.totalProducts = action.payload.total);
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(createProduct.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        (state.loading = false), state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(updateProduct.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(deleteProduct.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        (state.loading = false),
          state.products.filter(
            (product) => product._id !== action.payload._id
          );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});
export default adminProductSlice.reducer;
