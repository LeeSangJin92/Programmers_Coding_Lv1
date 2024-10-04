const solution = (a, b, n) => {

    // 결과값
    let result = 0;

    // 나머지 병
    let remainder = n%a;
    n = remainder>0?n-remainder:n;
    
    // 계산
    while(n>1){
        n = Math.floor(n/a) * b;
        result += n;
        n += remainder;
        remainder = n%a;
        n -= remainder;
    }

    // 결과 반환
    return result;
}

console.log(solution(2, 1, 20));    //19
// console.log(solution(2, 1, 19));    //19
// console.log(solution(3, 1, 20));    //9