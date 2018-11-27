import React from 'react';

import ProgressH from './ProgressH.js';

const max = 7;
const val = 2;

const SectionProgressH = () => (
  <section>
    <ProgressH max={max} val={val} />
  </section>
);

export default SectionProgressH;
