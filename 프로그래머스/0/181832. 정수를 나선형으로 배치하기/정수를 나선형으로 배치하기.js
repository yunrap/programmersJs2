function solution(n) {
 const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1; // 배치할 숫자
  let left = 0, right = n - 1, top = 0, bottom = n - 1; // 나선형으로 배치할 범위

  // 범위가 겹치지 않도록 반복
  while (left <= right && top <= bottom) {
    // 오른쪽으로 숫자 배치
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // 아래로 숫자 배치
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // 왼쪽으로 숫자 배치
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
    }

    // 위로 숫자 배치
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  }

  return matrix;
}