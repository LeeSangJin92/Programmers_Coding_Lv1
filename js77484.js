const solution = (lottos, win_nums) => {
    let result = lottos.reduce(([max, min], number)=>{
        if(number==0){--max;}
        else if(win_nums.includes(number)) {--max; --min};
        return [max, min];
    },[7,7])
    
    return result.map(number=>number>6&&6||number);
}

    
console.log(solution([0, 10, 8, 45, 6, 25], [31, 10, 45, 1, 6, 19]))