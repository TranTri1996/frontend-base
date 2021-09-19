import React from 'react';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { Home } from '../Home';

describe('Home component', () => {
  it('should render successful', () => {
    const homeSnapshot = renderer.create(<Home />).toJSON();
    expect(homeSnapshot).toMatchSnapshot();
  });
});