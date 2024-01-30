import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
    error: null,
    loading: false,
    value: 0,
}
export const fetchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const response = await fetch('http://192.168.1.18/vSP/data.php?data=categories');
        const data = await response.json();
        return data;
    }
);

export const  categoriesSlice = createSlice({
     name: 'categories',
    initialState,
    reducers:{

    },
    extraReducers : (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.categories = [];
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
                // state.entities.push(action.payload);
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});




export default categoriesSlice.reducer;