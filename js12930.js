const solution = (s) => s.split(" ").map(str=>[...str].map((word,index)=>index%2==0&&word.toUpperCase()||word.toLowerCase()).join('')).join(' ');


console.log(solution("try hello world"))