function solution(numbers, num1, num2) {
    const answer = numbers.filter((data, index) => {
        if(index>=num1 && index<=num2){
            return true;
        }
        return false;
    })
    return answer;
}