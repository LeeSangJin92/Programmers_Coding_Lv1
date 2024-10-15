const solution = (n) => {
    if(n==2) return 1;
    
    n = n%2==0&&n-1||n;
    let arr = [];
    while(n>=3){
        if(n==3||n%3!=0) arr.push(n);
        n -= 2
    }

    return arr.filter(number=>{
        let i = 5;
        let result = true;
        while(i*i<=number){
            if(number%i==0||number%(i+2)==0){
                result = false;
                break;
            }
            i +=6;
        }
        return result;
    }).length + 1;
}
console.log(solution(1000000))
console.log(solution(100))