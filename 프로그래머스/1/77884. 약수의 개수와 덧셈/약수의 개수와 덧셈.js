// 제곱근이 정수이면 약수의 개수는 홀수이다라는 조건,
// Number.isInteger 정수 판별, Math.sqrt 제곱근

function solution(left, right) {
    let answer = 0;
    for(let i= left; i<=right; i++){
      if(Number.isInteger(Math.sqrt(i))){
            answer -= i;
      }else{
           answer += i;
      }
    }
    return answer;
}