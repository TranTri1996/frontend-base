import React from 'react';
import { expect } from '@jest/globals';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { SideBar, ToolBar } from 'components';
import { Home } from '../Home';

describe('Home component', () => {
  it('should render successful', () => {
    const homeSnapshot = renderer.create(<Home />).toJSON();
    expect(homeSnapshot).toMatchSnapshot();
  });
  it('should render SideBar component inside Home component', () => {
    const home = shallow(<Home />);
    expect(home.find(SideBar)).toHaveLength(1);
  });
  it('should render Toolbar component inside Home component', () => {
    const home = shallow(<Home />);
    expect(home.find(ToolBar)).toHaveLength(1);
  });
});