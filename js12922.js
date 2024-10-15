const solution = (n) => Array(n).fill().reduce((result,_,index)=>result+= index%2==0&&"수"||"박","");

console.log(solution(3))