
// 공식 1) 1,2,3,4,5,1,2,3,4,5,....
// 공식 2) 2,1,2,3,2,4,2,5,2,1,....
// 공식 3) 3,3,1,1,2,2,4,4,5,5,....


const solution = (answers) => {
    
    let arr1 = [1,2,3,4,5];
    let arr2 = [2,1,2,3,2,4,2,5];
    let arr3 = [3,3,1,1,2,2,4,4,5,5];

    let correct = answers.reduce((result, number, index)=>{
        arr1[index%5]==number&&++result[0];
        arr2[index%8]==number&&++result[1];
        arr3[index%10]==number&&++result[2];
        return result;
    },[0,0,0])

    
    return correct.map((count, index)=>Math.max(...correct)==count&&index+1||null).filter(data=>data);
}


console.log(solution([4,5,4])) // [1]   1번 공식이 모두 맞음
console.log(solution([1,2,3,4,5])) // [1]   1번 공식이 모두 맞음
console.log(solution([1,3,2,4,2])) // [1,2,3] 각 두 문제씩