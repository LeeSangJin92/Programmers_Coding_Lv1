const solution = (k, score) =>{
    // 명예의 전당 리스트
    let rankList = [];
    return score.reduce((result, number, index)=>{
        
        // 명예의 전당에 점수 추가
        rankList.push(number);

        // 명예의 전당 순의 순서 정렬
        rankList.sort((a,b)=>b-a);

        // 명예의 전당에서 낙오된 점수 제거
        rankList.length>k&&rankList.pop();

        // 명예의 전당 마지막 점수 결과 리스트에 추가
        result.push(rankList[rankList.length-1])

        // 결과 반환
        return result;
    },[]);
}


console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));