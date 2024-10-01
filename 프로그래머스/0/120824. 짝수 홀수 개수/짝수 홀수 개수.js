function solution(num_list) {
    var answer = [0,0];
    
    num_list.forEach((data) => {
        if(data % 2 === 0){
            answer[0] = ++answer[0];
        }else{
            answer[1] = ++answer[1];
        }
        
    })
    return answer;
}