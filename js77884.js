const solution = (left, right) => {
    let result = 0;
    while(left<=right){
        result += calculate(left)&&left||-left;
        ++left;
    }
    return result;
}

const calculate = (left) => {
    let count = 0;
    let number = 1;
    while(number<=left){
        left%number==0&&++count;
        ++number;
    }
    return count%2==0;
}

console.log(solution(13,17))