// 연습문제 - 이상한 문자 만들기

function solution(s) {
  let newStr = "";
  let arr = s.split(" ");
  arr.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) newStr += str[i].toUpperCase();
      else newStr += str[i].toLowerCase();
    }
    newStr += " ";
  });
  return newStr.slice(0, newStr.length - 1);
}

let res = solution("try hello world");
console.log(res);

// 다른 사람의 풀이
function toWeirdCase(s) {
  //함수를 완성해주세요
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}
// 's.toUpperCase()' : 문자열을 모두 대문자로 변환함
// 'replace()' : 정규표현식에 매칭되는 부분을 찾아 다른 문자열로 대체함
// replace() 메서드의 첫 번째 인자: 정규표현식 '/(\w)(\w)/g'
// - '\w' : 단어 문자(character)를 나타내며, 알파벳(대소문자), 숫자, 밑줄(_)을 의미함
// - '(\w)(\w)' : 두 개의 단어 문자를 각각 하나씩 그룹으로 묶음
// - '/g' : 전역 검색을 의미하는 플래그로, 문자열 전체에서 패턴과 일치하는 모든 부분을 찾음
// replace() 메서드의 두 번째 인자: 콜백 함수
// 이 콜백 함수는 각 매칭된 부분에 대해 호출되며, 매칭된 부분에 대한 처리를 담당함
// 이 경우에는 각각의 매칭된 두 문자를 받아서 첫 번째 문자를 대문자로 변환하고, 두 번째 문자를 소문자로 변환하여 반환함