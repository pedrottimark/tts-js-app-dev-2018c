const clubs = ['10♣', '9♣'];

console.log(clubs);

const clubs2 = clubs.concat('5♣', '2♣');
const clubs1 = clubs.concat(['5♣', '2♣']);

console.log(clubs);

console.log(clubs2);
console.log(clubs1);
console.log(clubs1 === clubs2);
