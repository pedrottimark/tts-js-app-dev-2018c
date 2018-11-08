import React from 'react';

// TODO 3a
// TODO 2a
import Marked from './Marked.js';
// TODO 1a

import {hrefTitle} from './href.js';

const Title = ({opinion, title}) => (
  <tr className={opinion}>
    <td className="icon">
      <Marked marked={opinion === 'marked'} />
    </td>
    <td className="icon">
      {/* TODO 1b */}
    </td>
    <td className="icon">
      {/* TODO 2b */}
    </td>
    <td className="icon">
      {/* TODO 3b */}
    </td>
    <th className="title" scope="row">
      <a href={hrefTitle(title.workid)}>{title.titleweb}</a>
    </th>
    <td className="number">{title.priceusa}</td>
    <td className="number">{title.onsaledate}</td>
  </tr>
);

export default Title;
