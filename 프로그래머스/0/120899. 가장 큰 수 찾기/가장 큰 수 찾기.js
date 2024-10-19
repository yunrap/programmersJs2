function solution(array) {
    // [1,8,3] 가장큰수를 담는법 
    // 1.반복문, 가장큰수임시배열 
    // 2.임시배열 < 숫자 , 임시배열비우고 [숫자, index]넣기
    let tempArray = [];
    array.forEach((v, index) => {
        if(tempArray.length === 0) tempArray = [v , index];
        if(v > tempArray[0]){
            tempArray = [];
            tempArray = [v , index];
        }
    })
    return tempArray;
}