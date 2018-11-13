import React from 'react';

import {hrefAuthor} from './href.js';

const Author = ({authordisplay, authorid}) => (
  <header>
    <h1>
      <a href={hrefAuthor(authorid)}>{authordisplay}</a>
    </h1>
  </header>
);

export default Author;
