// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) - 로또의 최고 순위와 최저 순위

// 0의 개수가 관건

// lottos 배열과 win_nums 배열 중 일치하는 숫자가 있으면 count 변수를 1 증가시킴
// (count 변수의 값)개 번호가 일치 -> 최저 등수
// (count 변수의 값 + lottos 배열에 있는 0의 개수)개 번호가 일치 -> 최고 등수

function solution(lottos, win_nums) {
  let answer = [];
  let count = 0;
  let zeroCount = 0;

  win_nums.forEach((num) => (count += lottos.includes(num) ? 1 : 0));
  lottos.forEach((num) => (zeroCount += num === 0 ? 1 : 0));

  answer.push(7 - (count + zeroCount));
  if (answer[0] >= 7) answer[0] = 6;
  answer.push(7 - count);
  if (answer[1] >= 7) answer[1] = 6;

  return answer;
}

// 다른 사람의 풀이 1
function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];

  let minCount = lottos.filter((v) => win_nums.includes(v)).length;
  let zeroCount = lottos.filter((v) => !v).length;

  const maxCount = minCount + zeroCount;

  return [rank[maxCount], rank[minCount]];
}
// 

// 다른 사람의 풀이 2
function solution(lottos, win_nums) {
  const answer = [];
  const min = lottos.filter((n) => win_nums.includes(n)).length;
  const max = lottos.filter((n) => n === 0).length + min;

  max > 1 ? answer.push(7 - max) : answer.push(6);
  min > 1 ? answer.push(7 - min) : answer.push(6);

  return answer;
}

// 다른 사람의 풀이 3
function solution(lottos = [], win_nums = []) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  let [max, min] = lottos.reduce(
    ([max, min], cur) =>
      win_nums.includes(cur)
        ? [++max, ++min]
        : cur === 0
        ? [++max, min]
        : [max, min],
    [0, 0]
  );
  return [rank[max], rank[min]];
}
