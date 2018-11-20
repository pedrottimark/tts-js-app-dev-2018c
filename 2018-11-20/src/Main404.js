import React from 'react';
import DocumentTitle from 'react-document-title';

import ImageBrokenPlate from './ImageBrokenPlate';
import ImageSpinningPlate from './ImageSpinningPlate';

import src from './not_found_404.svg';

import {title} from './content';

const Main404 = ({isWaiting, hasError}) => (
  <DocumentTitle title={`404 ${title}`}>
    <main className="not_found_404">
      <img src={src} alt="Not Found 404" className="not_found_404" />
      {isWaiting ? (
        <ImageSpinningPlate />
      ) : hasError ? (
        <ImageBrokenPlate />
      ) : null}
    </main>
  </DocumentTitle>
);

export default Main404;
