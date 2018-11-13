import React from 'react';

const Icon = ({children, fill, onClick, reaction, stroke, which, workid}) => (
  <svg
    viewBox="0 0 24 24"
    onClick={onClick && onClick.bind(null, workid, which)}
    fill={reaction === which ? fill : 'none'}
    stroke={reaction === which ? stroke : '#808080'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export default Icon;
