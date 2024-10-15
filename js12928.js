const solution = (n) => {
    let point = Math.floor(n/2)
    let list = [n];
    while(point>0){
        if(n%point==0) list.push(point);
        --point;
    }
    return list.reduce((result, number)=> result + number);
}

console.log(solution(12))