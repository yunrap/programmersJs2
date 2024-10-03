function solution(numbers) {
    let answer = 0;
    const lastIndex = numbers.length;
    
    numbers.sort((a,b) => a-b); // 정렬 오름차순 sort 매서드
    answer = numbers[lastIndex - 1] * numbers[lastIndex - 2]
    return answer;
}