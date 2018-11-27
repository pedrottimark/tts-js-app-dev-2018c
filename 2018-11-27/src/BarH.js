import React from 'react';

const bgColor = '#808080';
const fgColor = '#ffffff';

const BarH = ({max, val}) => {
  return (
    <svg className="bar-horizontal" viewBox="0 0 1 1">
      <rect
        x="0"
        y="0.375"
        width="1"
        height="0.25"
        fill={bgColor}
        stroke="none"
      />
      <rect
        x="0"
        y="0.375"
        width={val / max}
        height="0.25"
        fill={fgColor}
        stroke="none"
      />
    </svg>
  );
};

export default BarH;
