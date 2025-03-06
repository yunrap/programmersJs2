// while 
// break 조건 s:최소조각수 * slice > n
// s 1부터 시작

function solution(slice, n) {
    let s = 1;
    while(1) {
        if(s * slice >= n){
          break;  
        }
        s++;
    }
    return s;
}