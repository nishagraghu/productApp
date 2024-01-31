import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  error: null,
  loading: false,
  value: 0,
};
export const fetchUserByData = createAsyncThunk(
  'posts/fetchPosts',
  async (parameter) => {
    const response = await fetch(parameter);
    const data = await response.json();
    return data;
  },
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByData.pending, (state) => {
        const { loading, ...newState } = state;
        const newLoading = true;
        return {
          ...newState,
          loading: newLoading,
          error: null,
          data: [],
        };
      })
      .addCase(fetchUserByData.fulfilled, (state, action) => {
        const { loading, ...newState } = state;
        const newLoading = false;
        return {
          ...newState,
          loading: newLoading,
          posts: action.payload,
        };
      })
      .addCase(fetchUserByData.rejected, (state, action) => {
        const { loading, ...newState } = state;
        const newLoading = false;
        return {
          ...newState,
          loading: newLoading,
          error: action.error.message,
        };
      });
  },

});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
