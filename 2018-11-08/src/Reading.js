import React from 'react';

const Reading = ({reading}) => (
  <svg
    viewBox="0 0 24 24"
    fill={reading ? '#00ff00' : 'none'}
    stroke={reading ? '#000000' : '#808080'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-book-open"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

export default Reading;
