// 배열을 반복문돌린다.
// 큰사람이면 i를 증가시킨다

function solution(array, height) {
    let count = 0;
    array.forEach((data) => {
        if(data > height){
            count++;
        }
    })
    return count;
}