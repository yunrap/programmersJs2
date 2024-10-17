function solution(arr) {
    
    // 최소값 찾기
    const minNum = Math.min(...arr);
    // 최소값 index 찾기 , findIndex 썻다가 매개변수가 함수여서 indexOf로 바꿈
    const index = arr.indexOf(minNum);
    // 최솟값 index로 제거 , pop썻다가 splice 로바꿈
    arr.splice(index, 1);
    
    if(arr.length == 0){
        arr = [-1];
    }
    return arr;
}