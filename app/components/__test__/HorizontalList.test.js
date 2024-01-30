import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HorizontalList from '../HorizontalList';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: jest.fn(),
}));

describe('HorizontalList', () => {
    it('renders correctly', () => {
        const data = [
            { id: 1, category_name: 'Category 1' },
        ];

        const { getByText, getByTestId } = render(<HorizontalList data={data} />);

        data.forEach((item) => {
            expect(getByTestId('categoryNameText')).toBeTruthy();
        });
    });

    it('navigates to the SingleCategoryScreen when pressed', () => {
        const data = [
            { id: 1, category_name: 'Category 1' },
        ];

        useNavigation.mockReturnValue({
            navigate: jest.fn(),
        });

        const { getByTestId } = render(<HorizontalList data={data} />);

        const categoryTouchable = getByTestId('categoryTouchable');
        fireEvent.press(categoryTouchable);

        expect(useNavigation().navigate).toHaveBeenCalledWith('SingleCategoryScreen', { item: data[0] });
    });

});
