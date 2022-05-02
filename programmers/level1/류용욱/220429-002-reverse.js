function solution(n) {
    const str = String(n)
    let answer = (str.split('').reverse().map(Number))
    return answer;
}
