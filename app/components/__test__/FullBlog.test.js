import React from 'react';
import { render } from '@testing-library/react-native';
import FullBlog from '../FullBlog';

describe('FullBlog', () => {
  const mockItem = {
    title: 'Test Title',
    date: '2022-01-01',
    description: 'Test Description',
    image1: 'test-image1.jpg',
    image2: 'test-image2.jpg',
    image3: 'test-image3.jpg',
    image4: 'test-image4.jpg',
    image5: 'test-image5.jpg',
    description2: 'Test Description 2',
  };

  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<FullBlog item={mockItem} />);

    // Check if specific elements are present in the rendered component
   
    expect(getByText('Test Description')).toBeTruthy();
 
    expect(getByText('Test Description 2')).toBeTruthy();

    // Add more assertions as needed based on your FullBlog component structure
  });

  // Add more test cases as needed
});
