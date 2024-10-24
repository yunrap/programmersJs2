// money / 5500   = 아메리카노잔수
// 남은돈 = money = 아메리카노잔수 * 5500

function solution(money) {
    const array = [];
    const count = Math.floor(money / 5500);
    array.push(count);
    array.push(money - (count * 5500)); 
    return array;
}