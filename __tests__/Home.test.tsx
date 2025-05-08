import {} from 'react-native';
import React, {act} from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Home from '../src/screens/Home';
import {render, fireEvent} from '@testing-library/react-native';

test('Home snapshot', () => {
  let snap;
  act(() => {
    snap = ReactTestRenderer.create(<Home />).toJSON();
  });
  expect(snap).toMatchSnapshot();
});
