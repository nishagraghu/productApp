import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { NavigationContainer } from '@react-navigation/native';
import SingleCategoryScreen from '../SingleCategoryScreen';

// Create a mock store
const mockStore = configureMockStore();
const store = mockStore({
  counter: {
    posts: [
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
      },
    ],
  },
});

describe('SingleCategoryScreen', () => {
  it('renders correctly with mock store', () => {
    const mockRoute = {
      params: {
        item: { id: 1 }, // Adjust the mock data as needed
      },
    };

    // check if has the text BlogCard  in the screen

    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <SingleCategoryScreen route={mockRoute} />
        </NavigationContainer>
      </Provider>,
    );

    expect(getByText('test title')).toBeTruthy();
  });
});
