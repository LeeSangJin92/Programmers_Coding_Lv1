const solution = (n) => {
    let result = 2;
    while((n-1)%result!=0){
        ++result;
    }
    return result;
}
console.log(solution(12));  // 3
console.log(solution(10));  // 3
console.log(solution(100));  // 3