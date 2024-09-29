function solution(numbers) {
  var sum = 0;
  numbers.forEach((element) => (sum += element));    // 원본 배열변경 forEach 함수
  return sum / numbers.length;
}