const solution = (n) => 
    parseInt([...n.toString(3)].reverse().join(""),3);

console.log(solution(45))