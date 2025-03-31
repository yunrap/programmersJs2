// https://leetcode.com/problems/two-sum/
// 클로저를 사용하여 내부 함수를 정의하고, 반복문을 통해 두 수의 합을 찾는 방법

var twoSum = function (nums, target) {
  // 클로저로 내부 함수 정의
  const findPair = (startIdx) => {
    for (let j = startIdx + 1; j < nums.length; j++) {
      if (nums[startIdx] + nums[j] === target) {
        return [startIdx, j];
      }
    }
    return null; // 해당 인덱스에서 찾지 못한 경우
  };

  // 반복문을 돌며 내부 함수 호출
  for (let i = 0; i < nums.length; i++) {
    const result = findPair(i);
    if (result) {
      return result; // 찾은 경우 바로 리턴
    }
  }
};
