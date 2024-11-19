// 나머지가 1이되는수에서 가장작은수  
// for n>찾는수 반복해서 answer이 가장작은값을찾기

function solution(n) {
   for(let i=0; i<n; i++){
       if(n%i === 1){    // 찾으면 바로 break
           return i;
       }
   }
}