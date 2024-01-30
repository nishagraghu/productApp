import React from 'react';
import { render } from '@testing-library/react-native';
import DetailsScreen from '../DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';

// MOKE FullBlog 



describe('DetailsScreen', () => {
    it('renders correctly with item', () => {
        const mockRoute = {
            params: {
                item: {
                    // Provide the necessary properties for your item
                    title: 'Test Title',
                    image1: 'test-image.jpg',
                    image2: 'test-image.jpg',
                    image3: 'test-image.jpg',
                    image4: 'test-image.jpg',
                    image5: 'test-image.jpg',
                    description: 'Test Description',
                    date: '2022-01-01',
                    // ... other properties
                },
            },
        };

        const { getByText ,getByTestId } = render(
            <NavigationContainer>
                <DetailsScreen route={mockRoute} />
            </NavigationContainer>);

        expect(getByText('Test Title')).toBeTruthy();
      
        expect(getByText('Test Description')).toBeTruthy();
        expect(getByText('2022-01-01')).toBeTruthy();
      
         
    });

   

    // Add more test cases as needed
});
