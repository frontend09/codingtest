/* 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수,
solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다. */

function solution2(phoneNumber) {
  let last = [];
  //  제한 조건이 성립되지 않으면, 함수 종료
  if (phoneNumber.length < 4 || phoneNumber.length > 20) return '';

  // 제한 조건이 성립시 반복문 실행
  for (let i = 0; i < phoneNumber.length; i++) {
    if (i < phoneNumber.length - 4) {
      last.push('*');
    } else {
      last.push(phoneNumber[i]);
    }
  }
  // 배열 -> 문자열로 전환
  return last.join('');
}
