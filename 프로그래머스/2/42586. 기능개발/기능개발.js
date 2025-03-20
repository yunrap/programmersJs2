// progresses : 작업진도 , speeds : 개발속도 , return : 각배포마다몇개기능
// 배포는하루에한번
function solution(progresses, speeds) {
    const days = [];
    
   for (let i = 0; i < progresses.length; i++) {
        const remaining = 100 - progresses[i];
        const daysNeeded = Math.ceil(remaining / speeds[i]); 
        days.push(daysNeeded);
    }

   let result = [];
    let currentMax = days[0];
    let count = 1;
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= currentMax) {
            count++;
        } else {
            result.push(count);
            currentMax = days[i];
            count = 1;
        }
    }

    result.push(count);
    return result;

}