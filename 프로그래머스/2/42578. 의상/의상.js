function solution(clothes) {
    const answer = new Map();
    
    for(data of clothes){
        let value;
        const keys = data[1];
        if(answer.has(keys)){
           const value = answer.get(keys);
           answer.set(keys, value+1);
        }else{
           answer.set(keys, 1);
        }
    }
    
    let result = 1;
    for (const count of answer.values()) {
        console.log(count)
        result *= (count + 1); 
    }
    
    return result - 1;
}