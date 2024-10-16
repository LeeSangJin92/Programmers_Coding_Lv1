//  😡 시간 초과
// const solution = (arr) => arr.join('').match(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g).map(number=>+number[0]);

const solution = (arr) => arr.reduce((result, number, index)=>{
    if(result[result.length-1]!=number) result.push(number);
    return result;
},[arr[0]])

console.log(solution([1,1,3,3,0,1,1]))