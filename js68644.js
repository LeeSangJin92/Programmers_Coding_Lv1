const solution = (numbers) =>[...new Set(numbers.reduce((result, a, indexA)=>
    [...result,...numbers.slice(indexA+1).map((b)=>a+b)],[]))].sort((a,b)=>a-b);


console.log(solution([2,1,3,4,1]))