import React from 'react';
import {Link} from 'react-router-dom';

import ExternalLink from './ExternalLink';

const cdn = 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2015/12/';

const pathnames = {
  vegetables: 'Kids_Vegetables-300x262.jpg',
  fruits: 'Kids_Fruits-300x262.jpg',
  grains: 'KidsWG-300x262.jpg',
  protein: 'Kids_HealthyProtein-300x262.jpg',
  oils: 'Kids_HealthyOil-300x262.jpg',
  fluids: 'Kids_Water_longer-300x313.jpg',
};

const getRecommendationClass = recommendation =>
  recommendation < 0 ? 'avoid' : recommendation === 0 ? 'limit' : '';

const getVitaminLink = ({id, name, examples}, foodId) =>
  examples.indexOf(foodId) === -1 ? (
    '\u00b7' // middle dot
  ) : (
    <Link to={`/vitamins/${id}`}>
      <abbr title={name}>{id}</abbr>
    </Link>
  );

const getMineralLink = ({id, name, examples}, foodId) =>
  examples.indexOf(foodId) === -1 ? (
    '\u00b7' // middle dot
  ) : (
    <Link to={`/minerals/${id}`}>
      <abbr title={name}>{id}</abbr>
    </Link>
  );

const foodGroupSection = ({foodGroup, foods, minerals, vitamins}) => (
  <section>
    <table>
      <colgroup>
        <col />
      </colgroup>
      <colgroup>
        <col span={vitamins.length} />
      </colgroup>
      <colgroup>
        <col span={minerals.length} />
      </colgroup>
      <thead>
        <tr>
          <th scope="col">{foodGroup}</th>
          <th scope="colgroup" colSpan={vitamins.length}>
            <Link to="/vitamins">vitamins</Link>
          </th>
          <th scope="colgroup" colSpan={minerals.length}>
            <Link to="/minerals">minerals</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {foods.map(({id: foodId, recommendation}) => (
          <tr key={foodId}>
            <th scope="row" className={getRecommendationClass(recommendation)}>
              {foodId.replace(/_/g, ' ')}
            </th>
            {vitamins.map(vitamin => (
              <td key={`vitamins/${vitamin.id}`}>
                {getVitaminLink(vitamin, foodId)}
              </td>
            ))}
            {minerals.map(mineral => (
              <td key={`minerals/${mineral.id}`}>
                {getMineralLink(mineral, foodId)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <aside>
      <img src={`${cdn}${pathnames[foodGroup]}`} alt={foodGroup} />
      <p>
        <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/kids-healthy-eating-plate/">
          Kid’s Healthy Eating Plate
        </ExternalLink>
      </p>
    </aside>
  </section>
);

export default foodGroupSection;
