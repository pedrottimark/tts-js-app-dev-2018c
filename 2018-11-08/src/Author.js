import React from 'react';

import {hrefAuthor} from './href.js';

const Author = ({author}) => (
  <header>
    <h1>
      {author && (
        <a href={hrefAuthor(author.authorid)}>{author.authordisplay}</a>
      )}
    </h1>
  </header>
);

export default Author;
