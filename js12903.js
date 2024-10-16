const solution = (s) => s.length%2!=0&&s[s.length/2|0]||s[(s.length/2)-1]+s[(s.length/2|0)];


console.log(solution("abcde"))
console.log(solution("qwer"))
console.log(solution("we"))