function solution(n) {
   var result = 0;
    
   for(let i=0; i<n; n--){
       
     if(n % 2 == 0){
        result += n;
     }       
       
   }
    
   return result;
}