import React from 'react';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { SideBar } from 'components';

describe('SideBar component', () => {
  it('should render successful', () => {
    const sidebarSnapshot = renderer.create(<SideBar />).toJSON();
    expect(sidebarSnapshot).toMatchSnapshot();
  });
});