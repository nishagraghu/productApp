import { configureStore } from '@reduxjs/toolkit';
import counterSlice, { fetchUserByData } from '../counterSlice';

// Mock the fetch function
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([{
    id: 1,
    name: 'Category 1',
    image1: 'image1.jpg',
    image2: 'image2.jpg',
    image3: 'image3.jpg',
  }, {
    id: 2,
    name: 'Category 2',
    image1: 'image1.jpg',
    image2: 'image2.jpg',
    image3: 'image3.jpg',
  }]),
}));

describe('counter slice', () => {
  let store;

  it('should handle fetchUserByData', async () => {
    store = configureStore({ reducer: { counter: counterSlice } });
    // Clear all instances and calls to constructor and all methods:
    fetch.mockClear();
    await store.dispatch(fetchUserByData());
    const state = store.getState();
    expect(state.counter.loading).toBe(false);
    expect(state.counter.error).toBe(null);
    expect(state.counter.posts).toEqual([{
      id: 1,
      name: 'Category 1',
      image1: 'image1.jpg',
      image2: 'image2.jpg',
      image3: 'image3.jpg',
    }, {
      id: 2,
      name: 'Category 2',
      image1: 'image1.jpg',
      image2: 'image2.jpg',
      image3: 'image3.jpg',
    }]);
  });
  it('should handle fetchUserByData error', async () => {
    store = configureStore({ reducer: { counter: counterSlice } });
    // Clear all instances and calls to constructor and all methods:
    fetch.mockClear();
    fetch.mockImplementationOnce(() => Promise.reject(new Error('API is down')));
    await store.dispatch(fetchUserByData());
    const state = store.getState();
    expect(state.counter.loading).toBe(false);
    expect(state.counter.error).toBe('API is down');
    expect(state.counter.posts).toEqual([]);
  });
});
