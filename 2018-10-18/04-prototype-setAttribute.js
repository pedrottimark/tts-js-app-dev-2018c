// Given character data, construct instance of text node.
const Text = function (data) {
  this.nodeType = 3;
  this.data = data.replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

// Given tag name, constuct instance of HTML element.
const HTMLElement = function (tagName) {
    this.nodeType = 1;
    this.tagName = tagName.toUpperCase();
    this.attributes = [];
    this.childNodes = [];
};

// Given child node or element, append to childNodes array of instance.
HTMLElement.prototype.appendChild = function (child) {
  this.childNodes.push(child);
};

// Given name and value, set existing or new attribute of instance.
HTMLElement.prototype.setAttribute = function (name, value) {
  // TODO 1
  /*
  const found = this.attributes.find(attribute => TODO);
  if (found) {
    // TODO update value of existing attribute
  } else {
    // TODO append new attribute to attributes array of instahce
  }
  */
};

const src = 'https://plants.sc.egov.usda.gov/gallery/standard/hemer_001_shp.jpg';
const alt = 'daylily';

// TODO 2
// TODO assign an img element to variable with name img
// TODO set attribute with name string 'src' and value variable src
// TODO set attribute with name string 'alt' and value variable alt
// console.log(img);

const text = new Text('Individual daylily flowers last only one day but …');

const p = new HTMLElement('p');
p.appendChild(text);

const li = new HTMLElement('li');
// TODO 3
// TODO append img
// TODO append p
console.log(li);
