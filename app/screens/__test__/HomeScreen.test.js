import React from 'react';
import { render } from '@testing-library/react-native';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import { fetchUserByData } from '../../redux/counterSlice';
import { fetchCategories } from '../../redux/categorySlice';

// mock fetchUserByData
jest.mock('../../redux/counterSlice', () => ({
  fetchUserByData: jest.fn(),
}));
// fetchCategories
jest.mock('../../redux/categorySlice', () => ({
  fetchCategories: jest.fn(),
}));
// moke useDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(() => jest.fn()),
}));

const mockStore = configureMockStore();

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const fetchUserByDataData = [
      {
        id: 1,
        title: 'test title',
        category_id: 1,
        content: 'test',
        image1: 'test',
        image2: 'test',
        image3: 'test',
        image4: 'test',
        image5: 'test',
        description: 'test',
      }, {
        id: 2,
        title: 'test title',
        category_id: 1,
        content: 'test',
        image1: 'test',
        image2: 'test',
        image3: 'test',
        image4: 'test',
        image5: 'test',
        description: 'test',
      },
    ];
    const fetchCategoriesData = [
      {
        id: 1,
        category_name: 'test category',
      }, {
        id: 2,
        category_name: 'test category',
      },
    ];
    fetchUserByData.mockReturnValueOnce(fetchUserByDataData);
    fetchCategories.mockReturnValueOnce(fetchCategoriesData);
    expect(fetchUserByData).toHaveBeenCalledTimes(1);
    expect(fetchCategories).toHaveBeenCalledTimes(1);
  });

  // with  error
  it('renders correctly with error', () => {
    const store = mockStore({
      counter: {
        posts: [],
        loading: false,
        error: 'test error',
      },
      categories: {
        categories: [],
        loading: false,
        error: 'test error',
      },
    });
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <HomeScreen />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByTestId('errorView')).toBeTruthy();
  });
});
