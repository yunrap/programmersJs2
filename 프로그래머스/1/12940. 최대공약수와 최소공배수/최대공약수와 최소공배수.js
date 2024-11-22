// 최대공약수 : 작은수 / 큰수 !==0  나머지/큰수  반복하다 0되면 그수가 최대공약수
// 최대공배수 : n * m / 최대공약수

// 재귀함수를 사용해 볼수있는 코드였다. 참고하였지만..

function gcd (min,max) { // 최대공약수를 구하는 함수
    return min % max === 0 ? max : gcd(max , min % max) // 유클리드 호제법
}

function solution(n, m) {
    var answer = [];
    const max = Math.max(n,m); // 주어진 수 중 큰 수 찾기
    const min = Math.min(n,m); // 주어진 수 중 작은 수 찾기
    const gcdValue = gcd(min, max);
    const lcmValue = (n * m)/gcdValue; // 최소공배수는 주어진 수 두개를 곱하고 최대공약수로 나누면 된다.
    return [gcdValue, lcmValue];
}
