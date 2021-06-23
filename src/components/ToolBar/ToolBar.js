import React, { useEffect } from 'react';

const cls = 'toolbar';

const ToolBar = () => {
  useEffect(() => {
    window.addEventListener('click', () => console.log('scrolling!!!'));
  }, []);
  return (<div className={cls}>Test the push rule</div>);
};

export default ToolBar;
