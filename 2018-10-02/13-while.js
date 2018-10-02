let n = prompt('positive integer number or zero to stop');

while (n > 0) {
  let sum = 0;

  // Compute the sum of integers up to and including n
  for (let i = 1; i <= n; i += 1) {
    sum += i;
  }

  console.log(`${sum} is sum of integers up to and including ${n}`);

  n = prompt('positive integer number or zero to stop');
}
