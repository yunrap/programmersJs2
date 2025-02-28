// map 객체 사용하기
// map 에서 foreach는 (value, key)라는 점 깨달음
function solution(array) {
   const map = new Map();
    
    array.forEach(data => {
        map.set(data, (map.get(data) || 0) + 1)
    })
    
    let maxCount = 0; 
    let maxValue = null;  
    let isMultipleMax = false;
    
    map.forEach((count, value) => {
        if (count > maxCount) {
            maxCount = count;  
            maxValue = value; 
            isMultipleMax = false;
        } else if(count === maxCount){
            isMultipleMax = true;
        }
    });
        
    if(isMultipleMax) {
        return -1;
    }else{
        return maxValue;
    }
}