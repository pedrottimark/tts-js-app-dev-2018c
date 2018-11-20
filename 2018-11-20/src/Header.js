import React from 'react';

import {foodGroups} from './content';

const Header = () => (
  <header>
    <h1>
      <a href="/">Healthy Eating</a>
    </h1>
    <nav>
      {foodGroups.map(foodGroup => (
        <a
          key={foodGroup}
          href={`/food-groups/${foodGroup}`}
          className={foodGroup}
        >
          {foodGroup}
        </a>
      ))}
      <a href="/vitamins">vitamins</a>
      <a href="/minerals">minerals</a>
    </nav>
  </header>
);

export default Header;
