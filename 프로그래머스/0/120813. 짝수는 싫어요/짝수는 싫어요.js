function solution(n) {
   const arr =  Array.from({ length : n}, (x, i) => i + 1);
   const cols = arr.filter((v) => v%2 !== 0);
   return cols.sort((a,b) => (a - b))
}