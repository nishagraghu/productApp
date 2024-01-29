import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
  error: null,
  loading: 'idle',
  value: 0,
}
export const fetchUserByData = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch('http://192.168.1.18/vSP/data.php?data=posts');
    const data = await response.json();
   
    return data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByData.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
        state.data = [];
      })
      .addCase(fetchUserByData.fulfilled, (state, action) => {
        state.loading = 'idle';
        state.posts = action.payload;
       
        // state.entities.push(action.payload);
      })
      .addCase(fetchUserByData.rejected, (state, action) => {
        state.loading = 'idle';
     
        state.error = action.error.message;
      });
  },
    
   
   
})


// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer