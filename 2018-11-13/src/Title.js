import React from 'react';

import Icon from './Icon.js';

import {hrefTitle} from './href.js';

const Title = ({date, isWaiting, onClick, reaction, title, workid}) => (
  <tr className={isWaiting ? 'waiting' : ''}>
    <td className="icon">
      <Icon
        which="marked"
        fill="#ffff00"
        stroke="#000000"
        onClick={onClick}
        reaction={reaction}
        workid={workid}
      >
      </Icon>
    </td>
    <td className="icon">
      <Icon
        which="reading"
        fill="#00ff00"
        stroke="#008000"
        onClick={onClick}
        reaction={reaction}
        workid={workid}
      >
      </Icon>
    </td>
    <td className="icon">
      <Icon
        which="liked"
        fill="#00ffff"
        stroke="#0000ff"
        onClick={onClick}
        reaction={reaction}
        workid={workid}
      >
      </Icon>
    </td>
    <td className="icon">
      <Icon
        which="disliked"
        fill="#cccccc"
        stroke="#808080"
        onClick={onClick}
        reaction={reaction}
        workid={workid}
      >
      </Icon>
    </td>
    <th className="title" scope="row">
      <a href={hrefTitle(workid)}>{title}</a>
    </th>
    <td className="date">{date}</td>
  </tr>
);

export default Title;
