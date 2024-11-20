// 문자와 숫자를 어떻게 구별할가  isNaN 이라는 자바스크립트 표준내장객체가있네
// 0x16 이런경우도 x는 문자인데 

function checkLength(s) {
    return s.length === 4 || s.length ===6 ?  true : false;
}

function solution(s) {
        if (s.startsWith('0x')) {
            return false; // 16진수로 시작하는 문자열은 숫자처럼 취급되지 않도록 false 반환
        }
    
    
        // 지수표기인 문자열은 숫자처럼 취급되지 않도록 false 반환
        if (s.includes('e') || s.includes('E')) {
            return false;
        }
    
        if (s === "") {
            // isNaN은 "" 를 false로처리함 필요
            return false;
        }
    
    
        return (!isNaN(s)) && checkLength(s) ? true : false;
}