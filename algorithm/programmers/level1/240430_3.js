// 연습문제 - 최대공약수와 최소공배수

function solution(n, m) {
  // (최소공배수) = n*m / (최대공약수)
  let arr = [1, 1];
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) arr[0] *= i;
  }
  arr[1] = (n * m) / arr[0];
  return arr;
}
