const solution = (a,b) => a.reduce((result, number, index)=>
    result += number*b[index],0)


console.log(solution([1,2,3,4], [-3,-1,0,2]))