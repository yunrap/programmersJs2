function solution(arr1, arr2) {
    var answer = [[]];
    
    for(let i = 0; i<arr1.length; i++){
        answer[i] = []; // 여기부분 넣는게헷갈림, answer에 빈배열넣어주는 공간
        for(let j =0; j<arr2[1].length; j++){
            answer[i][j] =  arr1[i][j] + arr2[i][j];
        }
    }
    
    return answer;
}