// Array.from 첫번째인자는객체를 받아야한다. 그래서 String(n)으로 변경
// 문자열은 객체? 문자열은 원시값이지만 객체처럼사용한다.
// 원시값이라서 저번에 변경불가능, 치환으로

function solution(n)
{
   let result = 0;
   const data = Array.from(String(n), Number);
    data.forEach((dt) => result += dt);
    return result;
}