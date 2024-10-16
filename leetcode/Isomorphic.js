// https://leetcode.com/problems/isomorphic-strings/
// Input: s = "egg", t = "add"

// 동형문자열인지 검사하는문제
// indexOf 로 같은문자일때 앞의 index를 반환하는 성질을 이용하여 구현

var isIsomorphic = function (s, t) {
  let sArr = [];
  let tArr = [];
  for (let i = 0; i < s.length; i++) {
    sArr.push(s.indexOf(s[i]));
    tArr.push(t.indexOf(t[i]));
    if (sArr[i] != tArr[i]) return false;
  }
  return true;
};
