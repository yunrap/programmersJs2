// "N의 약수를 구할 때는, 1부터 N의 제곱근 까지의 수만 0으로 나누어 떨어지는지 확인하면 된다!"
// 10의 약수면 1부터 10의 제곱근 까지 1,2,3 0으로 나누어떨어지는지 확인, 이 수를 10으로 나눈수가답

// 1. 반복문으로 Math.pow(i) > 10작을때까지 
// 2. i가 0으로 나누어떨어지는지 확인 , 임시배열에 푸쉬
// 3. 배열자리 + 나눈몫 반복문돌리면서 누적합 계산

function solution(n) {
    let i = 1;
    let result = 0;
    let tempArray = [];
    
    if(n === 0) return 0;
    if(n === 1) return 1;
    
    while(Math.pow(i , 2) <= n){
        if(n % i  === 0)
        {
          tempArray.push(i);    
        }
       i++;
    }
    console.log(tempArray);
    tempArray.forEach((data) => {
        if(n/data === data){
            result += data; // 중복일때 ex 2*2 하나만 더하기
        }else{
           result += data + n/data;
        }
    })
    
    return result;
}