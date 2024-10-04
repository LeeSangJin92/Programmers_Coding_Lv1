const solution = (babbling) => babbling.reduce((result, str)=>
    {
        // 연속 발음 검사
        if(!/ayaaya|yeye|woowoo|mama/g.test(str))
        
        // 발음 제거
        if(/aya|ye|woo|ma/g.test(str)){
            str = str.replace(/aya/g," ")
            .replace(/ye/g," ")
            .replace(/woo/g," ")
            .replace(/ma/g," ")
            .replace(/\s/g,"");
        }

        // 남은 발음 확인
        result = str.length==0&&++result||result
        return result;
    },0)
    
    

// console.log(solution(["aya", "yee", "u", "maa"]));
// console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	));
// console.log(solution(["ayayeayaaya"]));
console.log(solution(["ayayemaaya"]));
console.log(solution(["mayayemaayaa"]));