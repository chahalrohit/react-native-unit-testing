import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Home from '../src/screens/Home';

describe('Home Screen', () => {
  it('should call onChangeText and update state correctly', () => {
    const {getByTestId, getByText} = render(<Home />);

    const input = getByTestId('username'); // Add testID="username" to your TextInput

    if (input) {
      console.log('input found');
    } else {
      throw new Error('Input not found');
    }

    fireEvent.changeText(input, '2');
    expect(getByText('2')).toBeTruthy();
    expect('2').toBe('2');
    // Here, expect is the assertion function, and .toBe(...) is a matcher that checks equality.

    // expect(...) is the assertion function from Jest.
    /*  An assertion function is a statement used in testing to check whether a specific condition is true. If the condition fails (i.e., it's false), the test fails, signaling that your code is not behaving as expected. */
    // .toBeTruthy() checks if the value is not null, undefined, false, or 0.
  });
});
