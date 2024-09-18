const solution = (name, yearning, photo) => {
 
    let score = name.reduce((result,nameStr,index)=>{return {...result, [nameStr]:yearning[index]}},{});

    return photo.map(arr=>arr.reduce((result,nameStr)=>result+(score[nameStr]?score[nameStr]:0),0));
}

console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]));