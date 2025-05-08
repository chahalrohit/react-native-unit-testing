import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../src/screens/Home';

it('should call onChangeText and update state correctly', () => {
  const {getByTestId, getByText} = render(<Home />);

  const input = getByTestId('username'); // Add testID="username" to your TextInput

  fireEvent.changeText(input, '2');
  expect(getByText('2')).toBeTruthy();
});
