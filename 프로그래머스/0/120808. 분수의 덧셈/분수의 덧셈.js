// (a * d + b * c) / (b * d) 규칙 



function solution(numer1, denom1, numer2, denom2) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    const numerator = numer1 * denom2 + numer2 * denom1 // 분자
    const denominator = denom1 * denom2 // 분모
    const gcdResult = gcd(numerator, denominator)
    return [numerator/gcdResult, denominator/gcdResult];
}