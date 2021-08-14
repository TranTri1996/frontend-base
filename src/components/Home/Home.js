import React from 'react';
import { SideBar, ToolBar } from 'components';

const cls = 'home';

export const Home = () => {
  return (
    <div className={cls}>
      <ToolBar />
      <SideBar />
    </div>
  );
};

