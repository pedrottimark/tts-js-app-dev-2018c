// Given character data, construct instance of text node.
const Text = function (data) {
  this.nodeType = 3;
  this.data = data.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// Given tag name, constuct instance of HTML element.
const HTMLElement = function (tagName) {
  this.nodeType = 1;
  this.tagName = tagName.toUpperCase();
  // TODO 1 initialize attributes property with empty array
  // TODO 2 initialize childNodes property with empty array
};

const textLily = new Text('Individual daylily flowers last only one day.');
console.log(textLily);

const textSusan = new Text('Black-eyed Susan has yellow ray flowers and dark brown spherical centers.');
console.log(textSusan);

const textPhlox = new Text('Phlox are highly attractive to butterflies.');
console.log(textPhlox);

const p = new HTMLElement('p');
console.log(p);
