import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../Home';

test('render Home view', () => {
  const { debug, getByTestId } = render(<Home />);
});
