const fibonacci = [0, 1];

for (let i = fibonacci.length; i < 8; i += 1) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  console.log(fibonacci[i] / fibonacci[i - 1]); // computed ratio
}

console.log((1 + Math.sqrt(5)) / 2); // golden ratio

console.log(fibonacci);
