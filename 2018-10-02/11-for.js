const n = prompt('positive integer number');

let sum = 0;

// Compute the sum of integers up to and including n
for (let i = 1; i <= n; i += 1) {
  sum += i;
}

console.log(`${sum} is sum of integers up to and including ${n}`);
