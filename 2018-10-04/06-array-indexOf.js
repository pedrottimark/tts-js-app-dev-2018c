const cards = ['A♥', '7♥', '6♥', '10♣', '9♣', '5♣', '2♣', 'J♠', '9♠', '8♠', '7♠', '5♠', '2♠'];

const card = process.argv[2]; // command line option

console.log(cards);
console.log(cards.indexOf(card), card);
