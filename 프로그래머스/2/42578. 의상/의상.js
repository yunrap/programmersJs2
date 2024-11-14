// 수민님푼문제 참고하였다, hashset 구현
// 중복되는데이터를 [_,type] 로 뺄수있다는사실!!.
// 저번에는 data[1] 자리수로 복잡하게준거 리팩토링

function solution(clothes) {
  var answer = 1;
  let clotheMap = new Map();

  clothes.forEach(([_,type]) => {
    if (clotheMap.has(type)) {
      clotheMap.set(type, clotheMap.get(type) + 1);
    } else {
      clotheMap.set(type, 1);
    }
  });

  for (let a of clotheMap.values()) {
    console.log(a);
    answer *= a + 1;
  }
    
  answer--;
  return answer;
}