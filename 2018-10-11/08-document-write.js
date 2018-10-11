const formatItem = item => `TODO`;

const formatItems = list => `<TODO>${list.map(formatItem).join('')}</TODO>`;

const list = JSON.parse('[{"id":1,"text":"Done that","completed":true},{"id":2,"text":"Do this","completed":false}]');

const output = formatItems(list);

// Put markup as string into Web page:
document.write(output);
