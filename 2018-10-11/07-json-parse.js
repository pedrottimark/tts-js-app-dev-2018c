const formatItem = item => `TODO`;

const formatItems = list => `<TODO>${list.map(formatItem).join('')}</TODO>`;

const list = JSON.parse('[{"id":1,"text":"Done that","completed":true},{"id":2,"text":"Do this","completed":false}]');

console.log(list);
console.log(formatItems(list));
