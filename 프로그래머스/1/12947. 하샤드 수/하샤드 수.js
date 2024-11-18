// 히샤드수: x%각 자리수합 === 0

function solution(x) {
    let result = 0;
    const convertArray = Array.from(String(x), Number);
    convertArray.forEach((x) => result += x);
    
    if(x%result === 0) return true
    return false;
}