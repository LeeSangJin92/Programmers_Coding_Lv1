const solution = (n) => {
    let sqrt = Math.sqrt(n)
    return sqrt%1>0&&-1||(sqrt+1)**2
};


console.log(solution(121))
console.log(solution(3))