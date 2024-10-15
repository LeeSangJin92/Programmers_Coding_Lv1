const solution = (s, n) => [...s].map(str=>str!=" "&&String.fromCharCode(change(str.charCodeAt(),n))||str).join("");


const change = (number, n) => {
    
    let result = number + n;
    console.log(result)
    // 대문자
    if(number<=90&&result>90){
        return result-90+64;
    }
    // 소문자
    else if(number>=97&&result>122){
        return result-122+96;
    }
    else return result;
}

console.log(solution("X z",2))