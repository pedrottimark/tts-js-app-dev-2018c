import React from 'react';
import DocumentTitle from 'react-document-title';

import ExternalLink from './ExternalLink';

/*
import ImageBrokenPlate from './ImageBrokenPlate'
import ImageSpinningPlate from './ImageSpinningPlate'
*/

import {title} from './content';

const MainHome = ({isWaiting, hasError}) => (
  <DocumentTitle title={`${title}`}>
    <main className="home">
      <img
        alt="Healthy Eating Plate"
        src="https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2012/09/HEPJan2015.jpg"
        className="home"
      />
      <p>
        <cite>
          <ExternalLink to="https://www.hsph.harvard.edu/nutritionsource/healthy-eating-plate/">
            Healthy Eating Plate
          </ExternalLink>
        </cite>
        <span>© 2011 Harvard T.H. Chan School of Public Health</span>
      </p>
      {/*isWaiting ? <ImageSpinningPlate /> : hasError ? <ImageBrokenPlate /> : null*/}
    </main>
  </DocumentTitle>
);

export default MainHome;
