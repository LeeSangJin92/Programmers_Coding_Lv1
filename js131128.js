const solution = (X, Y) => {

    // 0 ~ 9 까지 카운트 배열 생성 ( 원소 : 갯수 / index : 숫자 )
    let numbersX = [...X].reduce((result, number)=>++result[number]&&result,Array(10).fill(0))
    let numbersY = [...Y].reduce((result, number)=>++result[number]&&result,Array(10).fill(0))
    
    // 두 배열에서 숫자가 작은 수를 배열로 생성
    let resultNumbers = numbersX.map((count, index)=> Math.min(count,numbersY[index]))
    
    // index를 배열의 원소 값 만큼 repeat해서 문자열로 생성
    let result = resultNumbers.reduce((result, count, number)=>((number+"").repeat(count))+result ,"");

    // 생성된 문자열이 없다면 -1 | 만약 문자열이 "000" 처럼 반환 될 시 0으로 출력 | 그외엔 result 반환
    return (result.length==0 && "-1") ||
    (/^[^1-9]+$/g.test(result)&&'0')||
    result;
}

console.log(solution("000","00"));
console.log(solution("55250", "12550"))
console.log(solution("100", "2345"))
console.log(solution("501020", "5010201"))