const solution = (arr, divisor) => {
    let result = arr.filter(number=>number%divisor==0).sort((a,b)=>a-b);
    return result.length == 0 && [-1]|| result;
}

console.log(solution([5, 9, 7, 10], 5))