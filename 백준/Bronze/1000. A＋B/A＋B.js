const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

/* 코드 작성 */

var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);