const solution = (s) => [...s].map(str=>str.charCodeAt()).sort((a,b)=>b-a).map(str=>String.fromCharCode(str)).join("")

console.log(solution("aZbcdefg"))