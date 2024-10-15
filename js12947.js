const solution = (x) => x % [...(""+x)].reduce((result, number)=> +number + result,0) == 0;


console.log(solution(10))
console.log(solution(12))
console.log(solution(13))