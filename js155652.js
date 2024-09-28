const solution = (s, skip, index) => {

    // 아스키코드로 변환
    let codeList = [...s].map(word=>word.charCodeAt());
    let skipList = [...skip].map(word=>word.charCodeAt());

    // 각 아스키코드 증감에 따른 검증
    let resultList = codeList.map(code=>{
        let maxTurn = index;
        let resultCode = code;
        for(let turn = 1;turn<=maxTurn;turn++){
            resultCode = code+turn+(code+turn>122&&-26)
            skipList.includes(resultCode)&&maxTurn++;
        }
        return resultCode;
    });

    // 산출된 아스키코드를 문자열로 반환
    return resultList.map(code=>String.fromCharCode(code)).join('')
}
console.log(solution("aukks", "wbqd", 5));
console.log(solution("z", "a", 1));
console.log(solution("a", "bcdefghijk", 20));  // 정답 o 가 나와야함