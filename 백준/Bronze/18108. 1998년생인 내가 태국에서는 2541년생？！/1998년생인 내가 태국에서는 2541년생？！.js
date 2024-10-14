const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath));

// 서기 연도에 544년을 더하면 불기 연도가 됩니다

console.log(input - 543);