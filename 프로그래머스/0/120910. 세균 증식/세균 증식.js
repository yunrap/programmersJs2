// 처음 2, 1시간 => 2 * 2, 2시간 => 4 * 2 형태이네
// 누적값 * 2 를 하면될거같다.
// 

function solution(n, t) {
    let result = n;
    for (let i = 0; i<t; i++){
        result *= 2
    }
    return result;
}