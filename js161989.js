const solution = (n, m, section) => 
    section.reduce((result,num)=>{
        result[result.length-1][0]+m-1>=num&&result[result.length-1].push(num)||
        result.push([num]);
        return result
    },[[section.shift()]]).length;

console.log(solution(8,4,[2,3,6]))