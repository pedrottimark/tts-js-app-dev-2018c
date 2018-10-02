const colorHex = 'bada55';

const rHex = colorHex.slice(0, 2);
const gHex = colorHex.slice(2, 4);
const bHex = colorHex.slice(4);

console.log(rHex, gHex, bHex);

const r = parseInt(rHex, 16);
const g = parseInt(gHex, 16);
const b = parseInt(bHex, 16);

console.log(r, g, b);
