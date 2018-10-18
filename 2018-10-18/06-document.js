class HTMLElement {
  constructor(tagName) {
    this.nodeType = 1;
    this.tagName = tagName.toUpperCase();
    this.attributes = [];
    this.childNodes = [];
  }

  // Given child node or element, append to childNodes array of instance.
  appendChild(child) {
    this.childNodes.push(child);
  }

  // Given name and value, set existing or new attribute of instance.
  setAttribute(name, value) {
    const found = this.attributes.find(attribute => attribute.name === name);
    if (found) {
      found.value = value;
    } else {
      this.attributes.push({name, value});
    }
  }
}

class Text {
  constructor(data) {
    this.nodeType = 3;
    this.data = data.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
}

const document = {
  createElement(tagName) {
    return new HTMLElement(tagName);
  },
  createTextNode(data) {
    return new Text(data);
  }
};

// Test the document methods:

const href = 'https://plants.sc.egov.usda.gov/core/profile?symbol=HEMER';
const scientificName = 'Hemerocallis';
const authority = 'L.';
const commonName = 'daylily';

/*
<h3>
<a href="https://plants.sc.egov.usda.gov/core/profile?symbol=HEMER">
<em>Hemerocallis</em> <abbr>L.</abbr>
<br/>
<span>daylily</span>
</a>
</h3>
*/

const h3 = document.createElement('h3');

// TODO
// a which has href attribute and the following children:
// em
// text node whose character data is one space
// abbr
// br
// span

// append a to h3

console.log(h3);
