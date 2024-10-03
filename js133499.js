const solution = (babbling) => babbling.reduce((result, str)=>
    (str.replace(/aya/," ")
    .replace(/ye/," ")
    .replace(/woo/," ")
    .replace(/ma/," ")
    .replace(/\s/g,"")
    .length==0&&++result)||result
    ,0)

console.log(solution(["aya", "yee", "u", "maa"]));
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	));
console.log(solution(["yeayaye"]));