// 10만원이상 5%, 30만원 10%, 50만원 20%
// if문으로 나눠서 계산하면될듯

function solution(price) {
    if(price >= 100000 && price < 300000){
        price -=  price * 0.05;  
    }else if(price >= 300000 && price < 500000){
        price -=  price * 0.1;  
    }else if(price >= 500000){
        price -=  price * 0.2;  
    } 
    return Math.floor(price);
}