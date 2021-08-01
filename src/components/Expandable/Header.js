import React, { useState, useContext, useEffect } from 'react';
import { expandableContext } from './Expandable';
const cls = 'header';

const Header = ({ children, className = '', ...otherProps}) => {
  const { toggle } = useContext(expandableContext);
  return (
    <button
      className={`${cls} ${className}`}
      onClick={toggle}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Header;