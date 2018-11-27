import React from 'react';

const ProgressH = ({max, val}) => {
  return <progress className="horizontal" value={val} max={max} />;
};

export default ProgressH;
