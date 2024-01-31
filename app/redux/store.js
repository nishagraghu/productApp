import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import categorieReducer from './categorySlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    categories: categorieReducer,
  },
});

export default store;
