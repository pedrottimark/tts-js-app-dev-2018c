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
  // TODO 1
};

const text = new Text('Individual daylily flowers last only one day but …');

const p = new HTMLElement('p');
p.appendChild(text);
console.log(p);

// TODO 2
// TODO assign an li element to variable with name li
// TODO append p as child of li
// TODO console.log li

// TODO 3
// write function which given text,
// returns li element which has p element as child which has text node as child
//
// create a ul element
// call your function 3 times and append each returned li as child of ul
// 'Individual daylily flowers last only one day.'
// 'Black-eyed Susan has yellow ray flowers and dark brown spherical centers.'
// 'Phlox are highly attractive to butterflies.'
