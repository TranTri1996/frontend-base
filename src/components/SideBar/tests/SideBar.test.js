import React from 'react';
import { SideBar } from 'components';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';

describe('SideBar component', () => {
  it('should render successful', () => {
    const sidebarSnapshot = renderer.create(<SideBar />).toJSON();
    expect(sidebarSnapshot).toMatchSnapshot();
  });
});