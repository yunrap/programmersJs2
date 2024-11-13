// 입력된수가 짝수면 2로 나눈다
// 입력된수가 홀수면 3곱하고 1더한다
// 반복시킨다. 1일 될때까지 , count는 ++

function solution(num) {
    let count = 0;
    while(num !== 1){
        if(count === 500) return -1
        
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1
        count ++;
    }
    return count;
}