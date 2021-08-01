import React from 'react';
import { PureComponent } from 'react';

const cls = 'sidebar';

class SideBar extends PureComponent {
  render() {
    return (
      <div className={cls}>This is sidebar</div>
    );
  }
}

export default SideBar;
