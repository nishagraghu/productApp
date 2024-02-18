import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  error: null,
  loading: false,
  value: 0,
};
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (parameter) => {
    const response = await fetch(parameter);
    const data = await response.json();
    return data;
  },
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
        categories: [],
      }))
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const { loading, ...newState } = state;
        const newLoading = false;
        return {
          ...newState,
          loading: newLoading,
          categories: action.payload,
        };
      })
      .addCase(fetchCategories.rejected, (state, action) => {
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

export default categoriesSlice.reducer;
