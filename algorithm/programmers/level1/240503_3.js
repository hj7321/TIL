// 연습문제 - 시저 암호

function solution(s, n) {
  let answer = "";
  let ascii = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] === " ") {
      answer += " ";
      continue;
    }
    if(s[i] === "z") ascii = "a".charCodeAt(0) - 1;
    else if(s[i] === "Z") ascii = "A".charCodeAt(0) - 1;
    else ascii = s[i].charCodeAt(0); 
    answer += String.fromCharCode(ascii + n);
  }
  return answer;
}

console.log(" ".charCodeAt(0)); // 32
console.log("a".charCodeAt(0)); // 97
console.log("z".charCodeAt(0)); // 122
console.log("A".charCodeAt(0)); // 65
console.log("Z".charCodeAt(0)); // 90
console.log(String.fromCharCode(91)); // [
console.log(String.fromCharCode(92)); // \