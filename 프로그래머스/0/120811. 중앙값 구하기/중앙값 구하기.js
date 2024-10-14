function solution(array) {
   
    array.sort( (a, b) => a - b);
    const centerIndex = ( array.length-1 ) / 2;
    return array[centerIndex];    

}