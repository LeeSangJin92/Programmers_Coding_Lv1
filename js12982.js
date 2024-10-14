const solution = (d, budget) => {
    
    let totalData = 0;
    let count = 0;
    d.sort((a,b)=>a-b).some(number=>{
        totalData += number;
        totalData<=budget&&++count;
        return totalData>budget
    });
    return count;
}

console.log(solution([1,3,2,5,4], 9))
console.log(solution([2,2,3,3], 10))