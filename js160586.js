const solution = (keymap, targets) => {
    let wordList = [...new Set(keymap.map(str=>[...str]).flat())];
    let keyList = wordList.reduce((result,word)=>{
        return {...result,[word]:Math.min(...keymap.map(str=>[...str].indexOf(word)).filter(data=>data!=-1))+1}
        },{});
    
    return targets.map(str=>[...str].reduce((result,word)=> (result>-1&&Object.keys(keyList).includes(word)&&result+keyList[word])||-1 ,0))
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD","AABB"]))
console.log(solution(["AA"], ["B"]))
console.log(solution(["AGZ", "BSSS"], ["ASA","BGZJ"]))