const solution = (arr1, arr2) => arr1.map((arr,arrIndex)=>arr.map((number, numberIndex)=>number+arr2[arrIndex][numberIndex]))

console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))