import React from 'react';

const bgColor = '#808080';
const fgColor = '#ffffff';

const BarV = ({max, val}) => {
  return (
    <svg className="bar-vertical" viewBox="0 0 1 1">
      <rect
        x="0.375"
        y="0"
        width="0.25"
        height="1"
        fill={bgColor}
        stroke="none"
      />
      <rect
        x="0.375"
        y={1 - val / max}
        width="0.25"
        height={val / max}
        fill={fgColor}
        stroke="none"
      />
    </svg>
  );
};

export default BarV;
