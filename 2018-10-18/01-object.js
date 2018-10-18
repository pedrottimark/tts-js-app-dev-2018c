// Given input data as array of objects for plants:

const plants = [
  {
    symbol: 'HEMER',
    src: 'hemer_001_shp',
    scientificName: 'Hemerocallis',
    authority: 'L.',
    commonName: 'daylily',
    description: 'Individual daylily flowers last only one day. The total blooming time of a well-established clump may be 30 to 40 days.'
  },
  {
    symbol: 'RUHI2',
    src: 'ruhi2_002_shp',
    scientificName: 'Rudbeckia hirta',
    authority: 'L.',
    commonName: 'blackeyed Susan',
    description: 'Black-eyed Susan has yellow ray flowers and dark brown spherical centers. The seed is very small.'
  },
  {
    symbol: 'PHDR',
    src: 'phdr_1h',
    scientificName: 'Phlox drummondii',
    authority: 'Hook.',
    commonName: 'annual phlox',
    description: 'Phlox are highly attractive to butterflies. They bloom in the cool color range: from white to pink, rose, red, magenta, purple, and blue.'
  },
  {
    symbol: 'IREN',
    src: 'iren_002_shp',
    scientificName: 'Iris ensata',
    authority: 'Thunb.',
    commonName: 'Japanese iris',
    description: 'Iris are dependable, long-lived perennials. Japanese iris grow in wet soil and have the most spectacular flowers of all the iris.'
  },
  {
    symbol: 'MAGR4',
    src: 'magr4_001_shp',
    scientificName: 'Magnolia grandiflora',
    authority: 'L.',
    commonName: 'southern magnolia',
    description: 'Magnolia has showy, fragrant white, pink, or purple flowers, large glossy leaves, and striking fruit.'
  },
  {
    symbol: 'LAIN',
    src: 'lain_001_shp',
    scientificName: 'Lagerstroemia indica',
    authority: 'L.',
    commonName: 'crapemyrtle',
    description: 'Crape myrtle has prolific summer flowers, heat and drought tolerance, and year-round landscape interest.'
  }
];

// Return output markup as string:

const origin = 'https://plants.sc.egov.usda.gov';
const srcForImage = src => `${origin}/gallery/standard/${src}.jpg`;
const hrefForLink = symbol => `${origin}/core/profile?symbol=${symbol}`;

// TODO 1 replace plant arg and dot notation in template literals with object destructuring.
const renderPlant = plant => [
  `<li>`,
  `<img src='${srcForImage(plant.src)}' alt='${plant.commonName}'/>`,
  `<h3><a href='${hrefForLink(plant.symbol)}'>`,
  `<em>${plant.scientificName}</em> <abbr>${plant.authority}</abbr><br/><span>${plant.commonName}</span>`,
  `</a></h3>`,
  `<p>${plant.description}</p>`,
  `</li>`,
].join('');

// TODO 2 replace props arg and dot notation in template literals with object destructuring.
const renderSection = props => [
  `<section>`,
  `<h2>${props.heading}</h2>`,
  `<ul>${props.items}'</ul>`,
  `</section>`,
].join('');

// Put markup as string into Web page:

const heading = 'June';
const items = plants.map(renderPlant).join('');

// TODO 3 omit repeated names with object shorthand:
document.write(renderSection({heading: heading, items: items}));
