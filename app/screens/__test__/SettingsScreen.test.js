import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SettingsScreen from '../SettingsScreen';


describe('SettingsScreen', () => {
  it('renders correctly', () => {
    const { getByText, getByTestId } = render(<SettingsScreen />);

    // Check if the component renders the text and icons
    expect(getByText('Google is a multinational technology company specializing in internet-related services and products. It\'s a leading search engine, offers online advertising, cloud computing, software, and hardware.')).toBeDefined();
    expect(getByText('Contact us')).toBeDefined();
    expect(getByTestId('emailListItem')).toBeDefined();
    expect(getByTestId('phoneListItem')).toBeDefined();
 
  });

  it('handles email click', () => {
    const { getByTestId } = render(<SettingsScreen />);
    const emailListItem = getByTestId('emailListItem');

    fireEvent.press(emailListItem);

    // Add assertions based on the expected behavior when clicking the email item
    // For example, you can check if the Linking.openURL method is called with the correct mailto link
  });

  it('handles phone call', () => {
    const { getByTestId } = render(<SettingsScreen />);
    const phoneListItem = getByTestId('phoneListItem');

    fireEvent.press(phoneListItem);

    // Add assertions based on the expected behavior when clicking the phone item
    // For example, you can check if the Linking.openURL method is called with the correct phone number
  });
});
