import React from 'react';
import {Link} from 'react-router-dom';

const MineralsSection = ({minerals}) => (
  <section>
    <h2>minerals</h2>
    <div>
      <div>
        <table>
          <tbody>
            {minerals.map(({id, name}) => (
              <tr key={id}>
                <th scope="row">
                  <Link to={`/minerals/${id}`}>{id}</Link>
                </th>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <p>
          All <a href="/vitamins">vitamins</a>
        </p>
      </div>
    </div>
  </section>
);

export default MineralsSection;
