import React from 'react';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { ToolBar } from 'components';

describe('Toolbar component', () => {
  it('should render successful', () => {
    const toolbarSnapshot =   renderer.create(<ToolBar />      ).toJSON();
    expect(toolbarSnapshot).toMatchSnapshot();
  });
});