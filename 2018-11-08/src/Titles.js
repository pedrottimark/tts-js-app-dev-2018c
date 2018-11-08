import React from 'react';

import Title from './Title';

import {findOpinion} from './logic';

const Titles = ({opinions, titles}) =>
  titles.length !== 0 && (
    <table>
      <thead>
        <tr>
          <th className="icon" />
          <th className="icon" />
          <th className="icon" />
          <th className="icon" />
          <th scope="col" className="title">
            Title
          </th>
          <th scope="col" className="number">
            price
          </th>
          <th scope="col" className="number">
            published
          </th>
        </tr>
      </thead>
      <tbody>
        {titles.map(title => (
          <Title
            key={title.workid}
            opinion={findOpinion(opinions, title.workid)}
            title={title}
          />
        ))}
      </tbody>
    </table>
  );

export default Titles;
