import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice, { fetchCategories } from '../categorySlice';

// Mock the fetch function
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }]),
    })
);

describe('categories slice', () => {
    let store;

  

    it('should handle fetchCategories', async () => {
        store = configureStore({ reducer: { categories: categoriesSlice } });
        // Clear all instances and calls to constructor and all methods:
        fetch.mockClear();
        await store.dispatch(fetchCategories());
        const state = store.getState();
        expect(state.categories.loading).toBe(false);
        expect(state.categories.error).toBe(null);
        expect(state.categories.categories).toEqual([{ id: 1, name: 'Category 1' }, { id: 2, name: 'Category 2' }]);
    });
    it('should handle fetchCategories error', async () => {
        store = configureStore({ reducer: { categories: categoriesSlice } });
        // Clear all instances and calls to constructor and all methods:
        fetch.mockClear();
        fetch.mockImplementationOnce(() => Promise.reject('API is down'));
        await store.dispatch(fetchCategories());
        const state = store.getState();
        expect(state.categories.loading).toBe(false);
        expect(state.categories.error).toBe('API is down');
        expect(state.categories.categories).toEqual([]);
    });
});