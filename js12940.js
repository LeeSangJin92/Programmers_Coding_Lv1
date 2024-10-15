const solution = (n, m) => {
    // n, m 중에서 작은수가 큰수를 나누었을때 0이면 작은 수는 최소 공약수 / 큰수는 최소 공배수
    let [divisor, multiple] = 
        (n>=m&&n%m==0&&[m,n])||
        (n<=m&&m%n==0&&[n,m])||     
        [false,false];

    // 초기값이 비었을 경우 계산
    if(!divisor){
        // 작은 수의 루트부터 차감하면서 최대 공약수 계산
        let point = Math.floor(Math.sqrt(n>=m&&m||n));
        while(point>1){
            if(n%point==0&&m%point==0){
                break;
            }
            --point;
        }
        divisor = point
        multiple = (n*m)/point
    }

    return [divisor, multiple];
}
console.log(solution(3,12))
console.log(solution(1,1))
console.log(solution(8,10))