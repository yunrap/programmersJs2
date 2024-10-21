// "wwwdddd"   length / 2 = 3. (홀수) 자리수 return
// "eeeeeggg"  length / 2 = 4  (짝수)   자리수-1 하나뺀값 , 자리수 

function solution(s) {
    
    const mok =  Math.floor(s.length / 2);
    if(s.length % 2 === 0){
        return s[mok - 1] + s[mok]; 
    }else{
        return s[mok]; 
    }  
}