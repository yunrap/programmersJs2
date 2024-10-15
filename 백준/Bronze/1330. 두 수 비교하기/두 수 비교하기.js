const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a < b) {
  console.log("<");
}
if (a > b) {
  console.log(">");
}

if (a === b) {
  console.log("==");
}
