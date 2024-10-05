const solution = (numbers) => {
    return numbers.map((first, index1)=>{
        if(index1<=numbers.length-3){
            let secondList = numbers.slice(index1+1);
            return secondList.map((second,index2)=>{
                if(index2<secondList.length-1){
                   return secondList.slice(index2+1).map(third=>first + second + third); 
                }
            }).filter(data=>data).flat();
        }
    }).flat().filter(data=>data==0).length;
}

// console.log(solution([-3, -2, -1, 0, 1, 2, 3]))
console.log(solution([-2, 3, 0, 2, -5]))
// console.log(solution([-1, 1, -1, 1]))