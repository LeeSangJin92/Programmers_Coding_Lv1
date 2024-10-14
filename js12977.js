const solution = (nums) => {

    let count = 0;
    nums.forEach((firstNum, firstIndex)=>{
        if(firstIndex<=nums.length-3){
            nums.slice(firstIndex+1).forEach((secondNum, secondIndex)=>{
                nums.slice((firstIndex+1)+(secondIndex+1)).forEach(thirdNum=>{

                    let number = firstNum + secondNum + thirdNum;

                    if(number%2!=0){
                        let point = 3;
                        let answer = true;
                        while(point <= Math.sqrt(number)){
                            if(number%point==0) {
                                answer = false;
                                break;
                            }
                            point += 2;
                        }
                        answer&&++count;
                    }   
                })
            });
        }
    })
    return count;
}
console.log(solution([1,2,3,4]))
console.log(solution([1,2,7,6,4]))