// Given array of attribute objects from HTML,
// return props object for React.
const toProps = attributes => {
  const props = {};
  attributes.forEach(attribute => {
    props[attribute.name] = attribute.value;
  });
  return props;
};

const attributesInHTML = [
  {
    name: 'title',
    value: 'description of element',
  },
];

console.log(toProps(attributesInHTML));
