const equality = parseInt('ff', 16) === 255;
console.log(equality);
console.log(typeof equality);

const inequality = 9 !== 10;
console.log(inequality);
console.log(typeof inequality);

const less = 9 < 10;
console.log(less);
console.log(typeof less);

const lessOrEqual = 10 <= 10;
console.log(lessOrEqual);
console.log(typeof lessOrEqual);

const greater = 9 > 10; // one of these examples is not like the others :)
console.log(greater);
console.log(typeof greater);

const greaterOrEqual = 0 >= 0;
console.log(greaterOrEqual);
console.log(typeof greaterOrEqual);

const sum = 0.1 + 0.2;
console.log(sum === 0.3); // watch out for decimal arithmetic :(
console.log(sum);
