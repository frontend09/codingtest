/*자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
  제한 조건 : n은 10,000,000,000 이하인 자연수입니다!!  */

function solution(n) {
  // 1.숫자를 문자화 한 후 split() 배열로 만들고, reverse() 배열의 순서를 바꿈
  let str = (n + '').split('').reverse();
  console.log(str);
  // 2. 빈 배열을 만들어서 문자를 다시 숫자로 바꾼후, 해당 배열에 넣어줌
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    let num = Number(str[i]);
    answer.push(num);
  }
  return answer;
}
