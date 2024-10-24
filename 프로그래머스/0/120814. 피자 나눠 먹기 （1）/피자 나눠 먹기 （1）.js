// 7 * 값 > n 는 조건으로 풀면될듯
// while 문으로 위조건만족할때까지 값 0증가

function solution(n) {
    let i = 1
    while(1){
        if(7 * i >= n) break;
        i++;
    }
    return i;
}