const solution = (nums) => {
    let size = new Set(nums).size;
    let max = (nums.length)/2;
    return size<max&&size||max;
}

console.log(solution([3,3,3,2,2,4]))
console.log(solution([3,3,3,2,2,2]))
console.log(solution([3,1,2,3]))