const solution = (N, stages) => {
    let countList = stages.reduce((result, stage)=>{
        stage<=N&&++result[stage-1];
        return result;
        },Array(N).fill().map(_=>0))
    
    let player = stages.length;
    let resultData = countList.map((count, stage) => {
        let result = count/player;
        player -= count;
        return [result, stage+1];
    });

    return resultData.sort((a,b)=>b[0]-a[0]).map(data=>data[1]);
}


console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))
console.log(solution(4, [4,4,4,4,4]));