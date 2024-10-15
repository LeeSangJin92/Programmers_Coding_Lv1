const solution = (arr) => {
    let min = Math.min(...arr);
    let result = arr.filter(num=>num!=min)
    return result.length>1&&result||[-1];
}
console.log(solution([4,3,2,1]))