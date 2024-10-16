const solution = (a, b) => Array(Math.abs(a-b)+1).fill().map((_,index)=>index+(a>b&&b||a)).reduce((result, number)=>result+number)

console.log(solution(3,5))
console.log(solution(3,3))