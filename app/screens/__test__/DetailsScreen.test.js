import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';

describe('DetailsScreen', () => {
  it('renders correctly', () => {
    const mockRoute = {
      params: {
        item: { /* your mock data here */ },
      },
    };
    
    const { getByTestId } = render(<DetailsScreen route={mockRoute} navigation={{}} />);
    const detailsScreenText = getByTestId('detailsScreenText');
    
    expect(detailsScreenText).toBeTruthy();
    expect(detailsScreenText.props.children).toBe('Details Screen');
  });

  it('renders correctly without provided item', () => {
    const { getByTestId } = render(<DetailsScreen route={{}} navigation={{}} />);
    const detailsScreenText = getByTestId('detailsScreenText');
    
    expect(detailsScreenText).toBeTruthy();
    expect(detailsScreenText.props.children).toBe('Details Screen');
  });
});
