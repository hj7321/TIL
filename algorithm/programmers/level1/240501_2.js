// 연습문제 - 삼총사

// 첫 번째, 두 번째 선택한 숫자를 더하고 그것과 더했을 때 0이 되는 세 번째 숫자를 고르는 방법?

function solution(number) {
  let answer = 0;
  let n = number.length;
  for(let i = 0; i < n; i++) {
    for(let j = i+1; j < n; j++) {
      let sum = number[i] + number[j];
      for(let k = j+1; k < n; k++) {
        if(sum + number[k]) answer++;
      }
    }
  }
  return answer;
}

let result = solution([-2, 3, 0, 2, 5]);
console.log(result);