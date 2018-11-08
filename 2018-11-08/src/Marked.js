import React from 'react';

const Marked = ({marked}) => (
  <svg
    viewBox="0 0 24 24"
    fill={marked ? '#ffff00' : 'none'}
    stroke={marked ? '#000000' : '#808080'}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-star"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Marked;
