// 가장작은배열 * 가장큰배열 이렇게하면 최소누적값을 구할수있지않을까?

function solution(A,B){
    var answer = 0;
    
    const arrayA = A.sort((a, b) => a-b);
    const arrayB = B.sort((a, b) => b-a);
    let result = 0;
    
    for(let i = 0; i<arrayA.length; i++){
        result += arrayA[i] * arrayB[i];
    }
    return result;
}