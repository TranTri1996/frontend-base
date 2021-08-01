import React, { useState, useContext, useEffect } from 'react';
import { expandableContext } from './Expandable';

const cls = 'icon';

const Icon = ({ className = '', ...otherProps }) => {
  const { expanded } = useContext(expandableContext);
  return (
    <span className={`${cls} ${className}`} {...otherProps}>
      {expanded ? '-' : '+'}
    </span>
  );
};

export default Icon;