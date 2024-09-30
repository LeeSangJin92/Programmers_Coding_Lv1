const solution = (s) => [...s].reduce((result, word, index)=>
    [...result, 
        s.indexOf(word)==index&&-1||
        index-s.slice(0, index).lastIndexOf(word)
    ]
,[])

console.log(solution("banana"))
console.log(solution("foobar"))