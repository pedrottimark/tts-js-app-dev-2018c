const strings = process.argv.slice(2);

strings.forEach(string => {
  console.log(string.length, string);
});

// TODO
// reduce strings
// callback function has arguments max and string and returns either:
// length of current string if it is greater than current accumulator
// otherwise current accumulator
// 0 is initial value of accumulator
const maxLength = 0; // placeholder for result described in comment

console.log(maxLength);
