// 완전탐색 - 최소직사각형

function solution(sizes) {
  let longArr = [];
  let shortArr = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      longArr.push(sizes[i][0]);
      shortArr.push(sizes[i][1]);
    } else {
      longArr.push(sizes[i][1]);
      shortArr.push(sizes[i][0]);
    }
  }
  return Math.max(...longArr) * Math.max(...shortArr);
}

let result = solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
console.log(result);

// 다른 사람의 풀이 1
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}
// reduce() 함수를 사용하여 sizes 배열을 순회하면서 가장 큰 가로와 세로 값을 찾음
// 1. reduce() 함수의 초기값은 [0, 0]으로 설정되어 있음
// 2. reduce() 함수는 각 사각형 배열 [a, b]마다 현재까지의 최대 가로 길이 h와 최대 세로 길이 v와 비교하여 더 큰 값을 선택하여 업데이트함
// 3. 가로 길이와 세로 길이 중에서 큰 값을 최대 가로 길이(h)로, 작은 값을 최대 세로 길이(v)로 선택함
// 4. hor에는 가장 큰 가로 길이가 들어가고, ver에는 가장 큰 세로 길이가 들어감
// 5. 마지막으로 hor * ver을 반환하여 가장 큰 사각형의 넓이를 계산함
// 구조 분해 할당: ([h, v], [a, b])
// 구조 분해 할당 개념
// - 배열이나 객체의 값들을 추출하여 변수에 할당하는 방법
// - 배열이나 객체의 구조를 파악하여, 그 구조에 맞게 값을 추출하여 변수에 할당하는 것
// 여기에서는 콜백 함수의 인자로 들어오는 배열의 요소를 각각 따로 변수에 할당함
// [h, v] : 누적값인 acc가 배열 형태로 들어오는데, 이를 h와 v라는 변수에 각각 할당함
// [a, b] : 현재값인 cur가 배열 형태로 들어오는데, 이를 a와 b라는 변수에 각각 할당함

// 다른 사람의 풀이 2
function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}
