function solution(array, n) {
    let count = 0;
    array.forEach((data) => {
        if(data === n) count++;
    })
    return count;
}