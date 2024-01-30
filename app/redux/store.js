import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from './counterSlice';
import categorieReducer from './categorySlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categorieReducer,
  }
})