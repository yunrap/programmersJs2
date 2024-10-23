// 처음드는생각은 반복분을 이중으로 돌려서 s1기준으로 계속하는방법인데. 조금효과적인방법없을까?
// 아 includes 메서드가있었지 포함하면 true 반환
// for문말고 filter를 사용해보기
// 배열에서 포함여부를 볼땐 includes라는 메서드 기억할것. 

function solution(s1, s2) {
    const answer = s1.filter((x) => s2.includes(x));
    return answer.length;
}