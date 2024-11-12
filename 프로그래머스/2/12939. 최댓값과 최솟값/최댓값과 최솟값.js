// 배열에담은후 정렬해서 맨앞에와 맨뒤에값 return
function solution(s) {
    const data = s.split(" ")
    data.sort((a,b) => a-b);
    return `${data[0]} ${data[data.length-1]}` 
}