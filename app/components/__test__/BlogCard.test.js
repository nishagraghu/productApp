import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useNavigation } from '@react-navigation/native';
import BlogCard from '../BlogCard';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('BlogCard', () => {
  it('renders correctly', () => {
    const item = {
      title: 'Test Title',
      date: '2022-01-01',
      description: 'Lorem ipsum',
      image1: 'test-image.jpg',
    };

    const { getByText } = render(<BlogCard item={item} />);

    expect(getByText(item.title)).toBeTruthy();
    expect(getByText(item.date)).toBeTruthy();
    expect(getByText(item.description.substring(0, 100))).toBeTruthy();
  });

  it('navigates to the Details screen when pressed', () => {
    const item = {
      title: 'Test Title',
      date: '2022-01-01',
      description: 'Lorem ipsum',
      image1: 'test-image.jpg',
    };

    // Mock the navigate function from useNavigation
    useNavigation.mockReturnValue({
      navigate: jest.fn(),
    });

    const { getByTestId } = render(<BlogCard item={item} />);

    const cardTouchable = getByTestId('cardTouchable'); // Adjust testID based on your actual implementation
    fireEvent.press(cardTouchable);

    // Check if navigate function was called with the correct arguments
    expect(useNavigation().navigate).toHaveBeenCalledWith('Details', { item });
  });
});
