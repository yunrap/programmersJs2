// 공백이나오는경우도 생각할것

function solution(s) {
   let result = "";
    const data = s.split(" "); // 공백을 기준으로 문자열을 분리

    const datas = data.map((d) => {
        // 단어가 빈 문자열이 아닌 경우에만 처리
        if (d !== "") {
            return d[0].toUpperCase() + d.substring(1).toLowerCase();
        } else {
            return ""; // 빈 문자열은 그대로 반환
        }
    });

    // 결과를 다시 하나의 문자열로 합침
    result = datas.join(" ");
    return result;
}