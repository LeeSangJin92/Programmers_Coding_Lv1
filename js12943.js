const solution = (num) => {
    let count = 0;
    while(count<=500){
        if(num==1) break;
        ++count;
        num = (num%2==0&&num/2)||
              (num%2==1&&(num*3)+1);
    }
    return num!=1&&-1||count;
}

console.log(solution(6))
console.log(solution(16))
console.log(solution(626331))