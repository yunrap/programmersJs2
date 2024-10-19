// 가위(2)를낼경우 바위(0)이되야하고
// 바위(0)을낼경우 보(5)가되야하고
// 보를(5)를낼경우 가위(2)가되야하네
// if 문으로 2일시 0 result에 담고, 조건으로하기

function solution(rsp) {
    let str = "";
    for(v of rsp) {
        if(v === '2'){
            str += 0;
        }
        if(v === '0'){
            str += 5;
        }
        if(v === '5'){
            str += 2;
        }
    }
    return str;
}