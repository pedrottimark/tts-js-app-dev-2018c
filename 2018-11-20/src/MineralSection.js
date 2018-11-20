import React from 'react';
import {Link} from 'react-router-dom';

const MineralSection = ({mineral: {id, name, description, examples}}) => (
  <section>
    <h2>mineral {id}</h2>
    <p>
      <label>name:</label>
      <span>{name}</span>
    </p>
    <p>
      <label>description:</label>
      <span>{description}</span>
    </p>
    {examples.length === 0 ? (
      <br />
    ) : (
      <p>
        <label>example foods:</label>
        <span>{examples.join(', ').replace(/_/g, ' ')}</span>
      </p>
    )}
    <br />
    <p>
      All <Link to="/minerals">minerals</Link>
    </p>
  </section>
);

export default MineralSection;
