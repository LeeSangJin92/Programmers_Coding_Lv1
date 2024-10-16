const solution = (s) => [...s].filter(str=>/p|P/.test(str)).length == [...s].filter(str=>/y|Y/.test(str)).length

console.log(solution("pPoooyY"))
console.log(solution("Pyy"))
console.log(solution("aya"))