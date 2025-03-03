// (x * 6) / n === 0 

function solution(n) {
    let x = 1;
    
    while(1){
        if(( x * 6) % n === 0){
            break;
        }
        x++;
    }
    return x;
}