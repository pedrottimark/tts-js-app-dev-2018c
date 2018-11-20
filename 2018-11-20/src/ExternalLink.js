import React from 'react';

const ExternalLink = ({children, to}) => (
  <a href={to} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
);

export default ExternalLink;
