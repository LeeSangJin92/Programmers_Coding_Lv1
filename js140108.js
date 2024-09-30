const solution = (s) => {
    let pointWord = ""; // 기준 단어
    let pointCount = 0; // 기준 단어 카운트
    let otherCount = 0; // 다른 단어 카운트

    return [...s].reduce((result, word, index, arr) =>{

        // 카운트 수가 같을 경우 기준 초기화
        if(pointCount==otherCount){
            pointWord = word;
            otherCount = 0;
            pointCount = 0;
        }
        
        // 단어 비교 후 숫자 카운트
        pointWord==word&&++pointCount||++otherCount;
        result.push(result.pop()+word);
        arr.length-1!=index&&pointCount==otherCount&&result.push("");
        return result;
    },[""]).length
}

console.log(solution("banana"))
console.log(solution("abracadabra"))
console.log(solution("aaabbaccccabba"))