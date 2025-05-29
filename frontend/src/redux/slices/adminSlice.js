import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { backend } from "../instance";

export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
  const response = await backend.get(`/api/admin/users`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });

  return response.data;
});
export const addUser = createAsyncThunk(
  "admin/addUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await backend.post(`/api/admin/users`, userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const updateUser = createAsyncThunk(
  "admin/updateUser",
  async ({ id, name, email, role }) => {
    const response = await backend.put(
      `/api/admin/users/${id}`,
      { name, email, role },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      }
    );
    return response.data.user;
  }
);
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
  await backend.delete(`/api/admin/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("userToken")}`,
    },
  });
  return id;
});
const adminSlise = createSlice({
  name: "admin",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(addUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(addUser.fulfilled, (state, action) => {
        (state.loading = false), state.users.push(action.payload.user);
      })
      .addCase(addUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(updateUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const userIndex = state.users.findIndex(
          (user) => user._id === updatedUser._id
        );
        if (userIndex !== -1) {
          state.users[userIndex] = updatedUser;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      })
      .addCase(deleteUser.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});
export default adminSlise.reducer;
