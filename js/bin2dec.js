const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "Introduce a binary number: ",
});

rl.prompt();

rl.on("line", (input) => {
  isBinary(input) ? console.log(base10(input)) : console.error("The input is not binary");
  rl.prompt();
});

function isBinary(input) {
  for (i in input) {
    if (input[i] != 1 && input[i] != 0) {
      return false;
    }
  }
  return true;
}

function base10(input) {
  radix = input.length - 1;
  total = 0;
  for (i in input) {
    total += input[i] * Math.pow(2, radix);
    radix--;
  }
  return total;
}
