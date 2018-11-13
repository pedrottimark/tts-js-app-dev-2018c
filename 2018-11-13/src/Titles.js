import React from 'react';

import Title from './Title';

import {getReactionString} from './logic';

const Titles = ({reactions, workidsWaiting, works}) =>
  works && (
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
          <th scope="col" className="date">
            on-sale-date
          </th>
        </tr>
      </thead>
      <tbody>
        {works.map(({onsaledate, titleweb, workid}) => {
          const isWaiting = !reactions || workidsWaiting.includes(workid);
          const reaction = reactions ? getReactionString(reactions, workid) : undefined;
          return (
            <Title
              key={workid}
              date={onsaledate.slice(0, 10)}
              isWaiting={isWaiting}
              onClick={isWaiting ? undefined : (arg0, arg1, arg2) => { console.log(arg0, arg1, arg2); }}
              reaction={reaction}
              title={titleweb}
              workid={workid}
            />
          );
        })}
      </tbody>
    </table>
  );

export default Titles;
