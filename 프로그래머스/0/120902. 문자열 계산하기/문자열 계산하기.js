// 1. "" 기준으로 split 해서 문자열을 분류한다
// 2. 1자리는 연산자니 분류하고
// 3. 첫째자리 + 연산자 + 셋째자리 더해준다.

function solution(my_string) {
    let result=0;
    const data = my_string.split(" ");

    data.forEach((v, index) => {
        if(index === 0){
            result = Number(data[index]);
        }
        if(v === "+")
            result += Number(data[index +1])
        if(v === "-")
            result -= Number(data[index +1])
    })
    
    return result;
}