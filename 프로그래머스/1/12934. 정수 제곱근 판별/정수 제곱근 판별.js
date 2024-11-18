// Math.sqrt(): 제곱근, Math.pow(): 제곱한 값

function solution(n) {
    
    if(Number.isInteger(Math.sqrt(n))){
        const data =  Math.sqrt(n);
        return Math.pow(data + 1, 2);        
    }else{
        return -1;
    }

}