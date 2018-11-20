import React from 'react';
import {Link} from 'react-router-dom';

const Vitamins = ({vitamins}) => (
  <section>
    <h2>vitamins</h2>
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">solubility</th>
              <th scope="col">names</th>
            </tr>
          </thead>
          <tbody>
            {vitamins.map(({id, solubility, name}) => (
              <tr key={id}>
                <th scope="row">
                  <Link to={`/vitamins/${id}`}>{id}</Link>
                </th>
                <td>{solubility}</td>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <p>
          All <a href="/minerals">minerals</a>
        </p>
      </div>
    </div>
  </section>
);

export default Vitamins;
