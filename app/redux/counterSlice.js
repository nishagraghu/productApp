import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  error: null,
  loading: false,
  value: 0,
}
export const fetchUserByData = createAsyncThunk(
  'posts/fetchPosts',
  async (parameter) => {
    
    const response = await fetch(parameter);
    const data = await response.json();
    console.log({parameter});
   
    return data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByData.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.data = [];
      })
      .addCase(fetchUserByData.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
       
        // state.entities.push(action.payload);
      })
      .addCase(fetchUserByData.rejected, (state, action) => {
        state.loading = false;
     console.log(action.error.message);
        state.error = action.error.message;
      });
  },
    
   
   
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer