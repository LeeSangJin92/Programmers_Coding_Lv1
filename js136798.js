const solution = (number, limit, power) => Array(number).fill().map((_,index)=>{
    let data = calculate(index+1)
    return data>limit?power:data;
}).reduce((result, num)=>result+num);

// 약수 구하는 공식
const calculate = (num) => {
    let count = 0;
    let i = 1;
    while(i<=Math.sqrt(num)){
        count = num%i==0&&(i==num/i?count+1:count+2)||count;
        i++;
    }
    return count;
}


// console.log(solution(5,3,2))
console.log(solution(100000,3,2))
// console.log(solution(10,3,2));