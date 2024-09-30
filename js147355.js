const solution = (t, p) => [...t].reduce((result, _, index, list)=>{
    let lastIndex = list.length-p.length;
    let number = +(t.slice(index,index+p.length));

    return (index<=lastIndex&&number<=+p&&++result)|result;
},0);

console.log(solution("3141592", "271"));
console.log(solution("500220839878", "7"));