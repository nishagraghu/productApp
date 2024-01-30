import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counterSlice';
import categorieReducer from '../categorySlice';

describe('Redux Store Configuration', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        counter: counterReducer,
        categories: categorieReducer,
      },
    });
  });

  it('should have the correct initial state for counter', () => {
    const initialState = store.getState().counter;
    expect(initialState).toEqual({
      posts: [],
      loading: false,
      error: null,
      value: 0,
    });
  });

  it('should have the correct initial state for categories', () => {
    const initialState = store.getState().categories;
    expect(initialState).toEqual({
      categories: [],
      loading: false,
      error: null,
      value: 0,
    });
  });

  // Add more test cases as needed

});
