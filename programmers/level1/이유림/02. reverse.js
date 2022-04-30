// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// n	return
// 12345	[5,4,3,2,1]

function solution(n) {
  let array = n.toString().split("")
  // 문자열로 바꾸고 (toString), 배열로 변환(split), 
  // 돌면서 숫자로 변환 (map), 배열 뒤집기 (reverse)
  .map(n => Number(n)).reverse() ;
  // Number 대신 parseint, 앞에 + 연산자 붙이기 , 뒤에 * 1 붙이기
  return array;
}

