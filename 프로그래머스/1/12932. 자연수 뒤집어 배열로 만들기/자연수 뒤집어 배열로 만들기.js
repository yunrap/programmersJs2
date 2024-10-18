function solution(n) {
    // spread연산자는 숫자에서사용불가, string 전환
    var answer = [...n.toString()].map(Number);
    let array = new Array(answer.length).fill(0);
    answer.forEach((v,index) => {
       array[(answer.length-1) - index] = v
    })
    return array
}