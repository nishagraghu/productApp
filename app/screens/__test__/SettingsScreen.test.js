import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../SettingsScreen';

describe('SettingsScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<SettingsScreen />);

    expect(getByText('Google is a multinational technology company specializing in internet-related services and products. It\'s a leading search engine, offers online advertising, cloud computing, software, and hardware.')).toBeDefined();
    expect(getByText('Contact us')).toBeDefined();
    expect(getByTestId('emailListItem')).toBeDefined();
    expect(getByTestId('phoneListItem')).toBeDefined();
  });

  it('handles email click', () => {
    const { getByTestId } = render(<SettingsScreen />);
    const emailListItem = getByTestId('emailListItem');

    fireEvent.press(emailListItem);
  });

  it('handles phone call', () => {
    const { getByTestId } = render(<SettingsScreen />);
    const phoneListItem = getByTestId('phoneListItem');

    fireEvent.press(phoneListItem);
  });
});
