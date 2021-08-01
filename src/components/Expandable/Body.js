import React, { useState, useContext, useEffect } from 'react';
import { expandableContext } from './Expandable';

const cls = 'body';

const Body = ({ className = '', children, ...otherProps}) => {
  const { expanded } = useContext(expandableContext);

  return (
    <div
      className={`${cls} ${className}`}
      {...otherProps}
    >
      {expanded ? children : null}
    </div>
  );
};

export default Body;