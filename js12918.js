const solution = (s) => /^\d{4}$|^\d{6}$/g.test(s)

console.log(solution("0x16"))
console.log(solution("02asd"))
console.log(solution("0223"))
console.log(solution("022332"))