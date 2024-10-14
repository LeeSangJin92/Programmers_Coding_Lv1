const solution = (dartResult) => dartResult.match(/\d+[SDT][\*\#]?/g).reduce((numberList, str, index)=>{
    
    // 정규표현식으로 구조분해할당
    let [number, bonus, option] = str.match(/\d+|[SDT]|[\*\#]?/g)
    
    // 보너스 계산
    number = number**(bonus=="S"&&1||bonus=="D"&&2||bonus=="T"&&3);
    
    // 아차상 계산
    number = option=="#"&&number*-1||number;

    // 스타상 계산
    if(option=="*"){
        number = number * 2;

        // 첫번째 점수가 아닐 경우 이전 점수에 2배 적용
        if(index!=0) numberList[index-1] *= 2; 
    }

    // 계산된 점수 리스트에 추가
    numberList.push(number);

    return numberList;

    // 리스트에 있는 숫자 모두 합산
},[]).reduce((result, number)=>result+number);


console.log(solution("1S2D*3T"))    //37
console.log(solution("1D2S#10S"))   //9
console.log(solution("1D2S0T"))
console.log(solution("1S*2T*3S"))
console.log(solution("1D#2S*3S"))
console.log(solution("1T2D3D#"))